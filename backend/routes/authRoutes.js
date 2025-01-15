//backend/routes/authRoutes.js

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET;

// // Register a new user
// router.post('/register', async (req, res) => {
//   try {
//     const { username, email, password, isAdmin } = req.body;

//     // Check if user already exists (email or username)
//     const userExists = await User.findOne({ $or: [{ email }, { username }] });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ username, email, password: hashedPassword, isAdmin: isAdmin || false });
//     await newUser.save();

//     // Send success message
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Login a user
// router.post('/login', async (req, res) => {
//   const { email, username, password } = req.body;

//   try {
//     // Log the login attempt details
//     console.log('Login Attempt:', { email, username, password });

//     // Check if email or username exists (case-insensitive)
//     const user = await User.findOne({
//       $or: [
//         { email: email && { $regex: new RegExp("^" + email + "$", "i") } },
//         { username: username && { $regex: new RegExp("^" + username + "$", "i") } }
//       ]
//     });

//     // If user is not found, log and return the error
//     if (!user) {
//       console.log('User not found');
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Log user details for debugging (excluding password)
//     console.log('User found:', { username: user.username, email: user.email });

//     // Log the stored hashed password and compare it to the entered password
//     console.log('Stored Password Hash:', user.password);
//     console.log('Entered Password:', password);

//     // Compare the plain text password with the hashed password stored in the database
//     const match = await bcrypt.compare(password, user.password);

//     // Log the result of password comparison
//     console.log('Password Match:', match); 

//     if (!match) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });

//     // Send response with token
//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Login Error:', error);
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;

    // Check if user already exists (email or username)
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword, isAdmin: isAdmin || false });
    await newUser.save();

    // Send success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    console.log('Login Attempt:', { email, username, password });

    // Build query array for email or username
    const query = [];
    if (email) query.push({ email: new RegExp(`^${email}$`, 'i') });
    if (username) query.push({ username: new RegExp(`^${username}$`, 'i') });

    // Find user by email or username
    const user = await User.findOne({ $or: query });

    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User found:', { username: user.username, email: user.email });

    const match = await bcrypt.compare(password, user.password);
    console.log('Password Match:', match);

    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
