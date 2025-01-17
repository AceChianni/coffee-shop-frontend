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

// /backend/controllers/authController.js

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/authUtils.js';

// Sign up function
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('Signup Error: User already exists', { email });
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    console.log('New user created:', { username, email });

    // Generate token and respond
    const token = generateToken(newUser);
    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error('Signup Error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Login function
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Login Attempt:', { email }); // Log the login attempt

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login Error: User not found', { email });
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User found:', { email });

    // Compare the provided password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    console.log('Password Match:', match); // Log the result of password comparison

    if (!match) {
      console.log('Login Error: Invalid password', { email });
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token and send response
    const token = generateToken(user);
    console.log('JWT Token generated successfully:', token);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: error.message });
  }
};
