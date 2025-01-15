//backend/routes/authRoutes.js

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

    // Create new user with hashed password
    const newUser = new User({ username, email, password, isAdmin: isAdmin || false });
    await newUser.save();
    console.log('New User Registered:', newUser);

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
    // Log the login attempt details
    console.log('Login Attempt:', { email, username, password });

    // Check if email or username exists (case-insensitive)
    const user = await User.findOne({
      $or: [
        { email: { $regex: new RegExp("^" + email + "$", "i") } },
        { username: { $regex: new RegExp("^" + username + "$", "i") } }
      ]
    });

    // If user is not found
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    // Log user details for debugging (excluding password)
    console.log('User found:', { username: user.username, email: user.email });

    // Compare the entered password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    console.log('Password Match:', match); // Log the result of comparison

    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });

    // Send response with token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
