// //backend/routes/authRoutes.js

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET;

// // Login a user
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body; // Only use email and password

//   try {
//     console.log('Login Attempt:', { email, password }); // Log the login attempt

//     // Check if email exists (case-insensitive)
//     const user = await User.findOne({
//       email: { $regex: new RegExp("^" + email + "$", "i") },
//     });

//     if (!user) {
//       console.log('User not found:', email); // Log if user is not found
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Compare the entered password with the hashed password
//     const match = await bcrypt.compare(password, user.password);
//     console.log('Password Match:', match); // Log the result of password comparison

//     if (!match) {
//       console.log('Invalid credentials for user:', email); // Log for invalid password
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });

//     console.log('JWT Token generated successfully:', token); // Log token generation

//     // Send response with token
//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Login Error:', error); // Log any error in the process
//     res.status(500).json({ message: error.message });
//   }
// });

// backend/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  try {
    // Check if all required fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin: isAdmin || false, // Default to false if not provided
    });

    // Save the user in the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!', user: { username, email, isAdmin } });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'An error occurred during registration.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login Error: User not found', { email });
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User found:', { email });

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', isMatch); // Debugging the comparison

    if (!isMatch) {
      console.log('Login Error: Invalid password', { email });
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send the token and user details in the response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
