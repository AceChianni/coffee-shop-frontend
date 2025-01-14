// /backend/routes/productRoutes.js
import express from 'express';
import { createProduct, updateProduct, deleteProduct, getAllProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
