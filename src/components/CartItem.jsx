// src/components/CartItem.jsx
import PropTypes from 'prop-types';

export default function CartItem({ item, handleRemoveFromCart, handleQuantityChange }) {
  const handleQuantityInputChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      handleQuantityChange(item._id, newQuantity); 
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex items-center gap-4">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
        <div className="flex flex-col">
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={item.quantity}
          min="1"
          className="w-12 text-center border p-2 rounded"
          onChange={handleQuantityInputChange}
        />
        <button
          onClick={() => handleRemoveFromCart(item._id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};
