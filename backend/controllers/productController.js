// // /backend/controllers/productController.js
// import Product from '../models/Product.js';

// export const createProduct = async (req, res) => {
//   const { name, description, price, imageUrl, stock } = req.body;
//   try {
//     const newProduct = new Product({ name, description, price, imageUrl, stock });
//     await newProduct.save();
//     res.status(201).json({ message: 'Product created', product: newProduct });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;
//   try {
//     const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product updated', product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteProduct = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import Product from '../models/Product.js';

// Create Product
export const createProduct = async (req, res) => {
  const { name, price, description, image } = req.body;
  try {
    const newProduct = new Product({ name, price, description, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List Products
export const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, image },
      { new: true }
    );
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View Product
export const viewProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
