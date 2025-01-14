// /src/models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: String },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
