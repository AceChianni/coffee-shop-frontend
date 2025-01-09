// pages/admin/update-product.jsx
import React from 'react';

const UpdateProduct = () => {
  return (
    <div>
      <h1>Update Product</h1>
      <form>
        <div>
          <label htmlFor="product-id">Product ID:</label>
          <input type="text" id="product-id" name="product-id" disabled value="123" />
        </div>
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
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
