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

// module.exports = router;


// /backend/routes/authRoutes.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login Attempt:', { email, password }); // Log the login attempt

    // Check if email exists (case-insensitive)
    const user = await User.findOne({
      email: { $regex: new RegExp("^" + email + "$", "i") },
    });

    if (!user) {
      console.log('User not found:', email); // Log if user is not found
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User found:', { email });

    // Compare the entered password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    console.log('Password Match:', match); // Log the result of password comparison

    if (!match) {
      console.log('Invalid credentials for user:', email); // Log for invalid password
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });

    console.log('JWT Token generated successfully:', token); // Log token generation

    // Send response with token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error); // Log any error in the process
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
