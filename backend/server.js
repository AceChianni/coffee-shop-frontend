// /backend/server.js
import express from 'express';
import connectToDatabase from './lib/mongodb.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

import dotenv from 'dotenv';  
dotenv.config({ path: '.env.local' });

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Coffee Shop Backend API!');
});

// Set up API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
