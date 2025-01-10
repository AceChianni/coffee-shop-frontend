// src/components/CheckoutForm.jsx

// import PropTypes from 'prop-types';
// import styles from '../styles/checkout.module.css';

// export default function CheckoutForm({ cart = [], handleBuyNow }) {
//   // Calculate total price from cart items
//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

//   return (
//     <div className={styles.checkoutPage}>
//       <div className={styles.checkoutContainer}>
//         {/* Cart Summary - Left side */}
//         <div className={styles.cartSummary}>
//           <h2 className={styles.heading}>Cart Summary</h2>
//           <ul className={styles.cartList}>
//             {cart.length === 0 ? (
//               <li className={styles.emptyCart}>Your cart is empty.</li>
//             ) : (
//               cart.map((item) => (
//                 <li key={item._id} className={styles.cartItem}>
//                   <div>
//                     <span className={styles.itemName}>{item.name}</span>
//                     <span className={styles.itemQuantity}>Qty: {item.quantity}</span>
//                   </div>
//                   <span className={styles.itemPrice}>
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </span>
//                 </li>
//               ))
//             )}
//           </ul>
//           <div className={styles.total}>
//             <span>Total:</span>
//             <span>${calculateTotal()}</span>
//           </div>
//         </div>

//         {/* Checkout Form - Right side */}
//         <form className={styles.checkoutForm}>
//           {/* Shipping Details */}
//           <div>
//             <h2 className={styles.heading}>Shipping Details</h2>
//             <label className={styles.inputLabel}>
//               <span className={styles.inputLabelText}>Address:</span>
//               <input
//                 type="text"
//                 placeholder="Enter your address"
//                 className={styles.inputField}
//               />
//             </label>

//             <label className={styles.inputLabel}>
//               <span className={styles.inputLabelText}>Phone Number:</span>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className={styles.inputField}
//               />
//             </label>
//           </div>

//           {/* Payment Details */}
//           <div>
//             <h2 className={styles.heading}>Payment Details</h2>
//             <label className={styles.inputLabel}>
//               <span className={styles.inputLabelText}>Card Number:</span>
//               <input
//                 type="text"
//                 placeholder="1234 5678 9123 4567"
//                 className={styles.inputField}
//               />
//             </label>

//             <div className={styles.paymentDetails}>
//               <label className={styles.inputLabel}>
//                 <span className={styles.inputLabelText}>Expiration Date:</span>
//                 <input
//                   type="text"
//                   placeholder="MM/YY"
//                   className={styles.inputField}
//                 />
//               </label>
//               <label className={styles.inputLabel}>
//                 <span className={styles.inputLabelText}>CVV:</span>
//                 <input
//                   type="text"
//                   placeholder="123"
//                   className={styles.inputField}
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Buy Now Button */}
//           <button
//             type="button"
//             className={styles.buyNowButton}
//             onClick={handleBuyNow}
//           >
//             Buy Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// CheckoutForm.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   handleBuyNow: PropTypes.func.isRequired,
// };

// src/components/CheckoutForm.jsx

// src/components/CheckoutForm.jsx

import PropTypes from 'prop-types';

export default function CheckoutForm({ cart = [], handleBuyNow }) {
  // Calculate total price from cart items
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="checkout-page bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 grid gap-8 md:grid-cols-2">
        {/* Cart Summary */}
        <div className="cart-summary">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Cart Summary</h2>
          <ul className="space-y-4">
            {cart.length === 0 ? (
              <li className="text-gray-500">Your cart is empty.</li>
            ) : (
              cart.map((item) => (
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
          <div className="flex justify-between items-center mt-4 text-lg font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form className="flex flex-col gap-6">
          {/* Shipping Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Shipping Details</h2>
            <label className="flex flex-col">
              <span className="font-medium text-gray-700">Address:</span>
              <input
                type="text"
                placeholder="Enter your address"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </label>

            <label className="flex flex-col mt-4">
              <span className="font-medium text-gray-700">Phone Number:</span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </label>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Payment Details</h2>
            <label className="flex flex-col">
              <span className="font-medium text-gray-700">Card Number:</span>
              <input
                type="text"
                placeholder="1234 5678 9123 4567"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </label>

            <div className="flex gap-4 mt-4">
              <label className="flex flex-col flex-1">
                <span className="font-medium text-gray-700">Expiration Date:</span>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col flex-1">
                <span className="font-medium text-gray-700">CVV:</span>
                <input
                  type="text"
                  placeholder="123"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
            </div>
          </div>

          {/* Buy Now Button */}
          <button
            type="button"
            className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
}

CheckoutForm.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleBuyNow: PropTypes.func.isRequired,
};
