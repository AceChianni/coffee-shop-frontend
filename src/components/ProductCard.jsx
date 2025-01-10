// src/components/ProductCard.jsx

import PropTypes from 'prop-types';
import Button from './Button';

export default function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="card p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-bold mb-4">${product.price}</p>
      </div>
      <Button label="Add to Cart" handleClick={() => handleAddToCart(product)} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
