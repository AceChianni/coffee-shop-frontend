// pages/admin/create-product.jsx
import React from 'react';

const CreateProduct = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <form>
        <div>
          <label htmlFor="product-name">Product Name:</label>
          <input type="text" id="product-name" name="product-name" />
        </div>
        <div>
          <label htmlFor="product-price">Price:</label>
          <input type="number" id="product-price" name="product-price" />
        </div>
        <div>
          <label htmlFor="product-description">Description:</label>
          <textarea id="product-description" name="product-description"></textarea>
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
