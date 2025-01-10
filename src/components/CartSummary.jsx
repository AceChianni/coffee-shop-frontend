// /src/components/CartSummary.jsx
// const CartSummary = ({ total }) => {
//     return (
//       <div className="p-4">
//         <h2 className="text-2xl">Cart Summary</h2>
//         <p>Total: ${total}</p>
//       </div>
//     );
//   }
  
//   export default CartSummary;
  

// src/components/CartSummary.jsx
import PropTypes from 'prop-types';

const CartSummary = ({ cartItems, total }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {/* Display list of cart items */}
      <ul className="space-y-4">
        {cartItems.length === 0 ? (
          <li className="text-gray-500">Your cart is empty.</li>
        ) : (
          cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <span className="text-gray-700 font-medium">{item.name}</span>
                <span className="block text-sm text-gray-500">Qty: {item.quantity}</span>
              </div>
              <span className="text-gray-700 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))
        )}
      </ul>

      {/* Display the total */}
      <div className="flex justify-between items-center mt-4 text-lg font-bold">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

export default CartSummary;
