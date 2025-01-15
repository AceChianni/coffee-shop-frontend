// /backend/utils/authUtils.js
import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username, email: user.email }, // JWT payload with user info
    process.env.JWT_SECRET,
    { expiresIn: '1h' } // Token expiration time (1 hour)
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET); // Verifies the token and decodes it
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

export { generateToken, verifyToken };
