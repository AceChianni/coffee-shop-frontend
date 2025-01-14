// /backend/server.js
import express from 'express';
import connectToDatabase from './lib/mongodb';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Set up routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
