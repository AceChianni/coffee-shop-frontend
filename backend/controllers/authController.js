// // /backend/controllers/authController.js

// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import { generateToken } from '../utils/authUtils.js';

// // Sign up function
// export const signup = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     // Check if the user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user with hashed password
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     // Generate token and respond
//     const token = generateToken(newUser);
//     res.status(201).json({ message: 'User created', token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Login function
// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Compare the provided password with the stored hashed password
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token and send response
//     const token = generateToken(user);
//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// 



// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,  // Ensure JWT_SECRET is correctly defined
    { expiresIn: '1h' }
  );
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Login Attempt:', { email });

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login Error: User not found', { email });
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User found:', { email });

    // Log the stored password hash and entered password for debugging
    console.log('User password from DB (hashed):', user.password);  // Log the hashed password
    console.log('Password entered by user:', password);  // Log the entered password

    // Log the bcrypt salt rounds used for hashing
    console.log('Bcrypt Salt Rounds:', user.password.startsWith('$2a$') ? '10 rounds' : 'Unknown'); // Assuming bcrypt version 2a is being used

    // Compare the provided password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', match); // Log the comparison result

    if (!match) {
      console.log('Login Error: Invalid password', { email });
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user);
    
    // Send response with token and user role
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { email: user.email, isAdmin: user.isAdmin },
    });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: error.message });
  }
};
