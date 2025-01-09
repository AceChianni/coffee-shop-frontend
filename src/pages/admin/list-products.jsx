// pages/admin/list-products.jsx
import React from 'react';

const ListProducts = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Coffee Bean', price: 10.99 },
    { id: 2, name: 'Espresso Machine', price: 150.0 },
    { id: 3, name: 'Coffee Mug', price: 5.99 },
  ];

  return (
    <div>
      <h1>List of Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{`$${product.price.toFixed(2)}`}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
