// pages/admin/view-product.jsx
import React from 'react';

const ViewProduct = () => {
  // Sample product data
  const product = {
    id: 1,
    name: 'Coffee Bean',
    price: 10.99,
    description: 'High-quality coffee beans sourced from Brazil.',
  };

  return (
    <div>
      <h1>View Product</h1>
      <div>
        <p><strong>Product Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ViewProduct;
