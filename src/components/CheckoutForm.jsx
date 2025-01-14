// src/components/CheckoutForm.jsx
import PropTypes from 'prop-types';
import CartSummary from './CartSummary';
import { useState } from 'react';

export default function CheckoutForm({ cart, total, handleBuyNow }) {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleShippingChange = (field, value) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field, value) => {
    setPaymentInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shipping Info:', shippingInfo);
    console.log('Payment Info:', paymentInfo);
    console.log('Cart Total:', total);
    handleBuyNow();
  };

  return (
    <div className="checkout-page bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 grid gap-8 md:grid-cols-2">
        {/* Cart Summary */}
        <CartSummary cartItems={cart} total={parseFloat(total)} />

        {/* Checkout Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Shipping Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Shipping Details</h2>

            <label className="flex flex-col">
              <span className="font-medium text-gray-700">First Name:</span>
              <input
                type="text"
                value={shippingInfo.firstName}
                onChange={(e) => handleShippingChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>

            <label className="flex flex-col mt-4">
              <span className="font-medium text-gray-700">Last Name:</span>
              <input
                type="text"
                value={shippingInfo.lastName}
                onChange={(e) => handleShippingChange('lastName', e.target.value)}
                placeholder="Enter your last name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>

            <label className="flex flex-col mt-4">
              <span className="font-medium text-gray-700">Address:</span>
              <input
                type="text"
                value={shippingInfo.address}
                onChange={(e) => handleShippingChange('address', e.target.value)}
                placeholder="Enter your address"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>

            <label className="flex flex-col mt-4">
              <span className="font-medium text-gray-700">Phone Number:</span>
              <input
                type="tel"
                value={shippingInfo.phoneNumber}
                onChange={(e) => handleShippingChange('phoneNumber', e.target.value)}
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Payment Details</h2>

            <label className="flex flex-col">
              <span className="font-medium text-gray-700">Cardholder Name:</span>
              <input
                type="text"
                value={paymentInfo.cardholderName}
                onChange={(e) => handlePaymentChange('cardholderName', e.target.value)}
                placeholder="Enter cardholder name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>

            <label className="flex flex-col mt-4">
              <span className="font-medium text-gray-700">Card Number:</span>
              <input
                type="text"
                value={paymentInfo.cardNumber}
                onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9123 4567"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>

            <div className="flex gap-4 mt-4">
              <label className="flex flex-col flex-1">
                <span className="font-medium text-gray-700">Expiration Date:</span>
                <input
                  type="text"
                  value={paymentInfo.expirationDate}
                  onChange={(e) => handlePaymentChange('expirationDate', e.target.value)}
                  placeholder="MM/YY"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </label>

              <label className="flex flex-col flex-1">
                <span className="font-medium text-gray-700">CVV:</span>
                <input
                  type="text"
                  value={paymentInfo.cvv}
                  onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                  placeholder="123"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </label>
            </div>
          </div>

          {/* Buy Now Button */}
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700"
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
  total: PropTypes.string.isRequired,
  handleBuyNow: PropTypes.func.isRequired,
};
