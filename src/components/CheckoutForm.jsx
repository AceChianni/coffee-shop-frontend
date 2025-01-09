// src/components/CheckoutForm.jsx

import PropTypes from 'prop-types';

export default function CheckoutForm({ handleBuyNow }) {
  return (
    <form className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <label className="flex flex-col">
        <span className="font-medium text-gray-700">Address:</span>
        <input
          type="text"
          placeholder="Enter your address"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>

      <label className="flex flex-col">
        <span className="font-medium text-gray-700">Phone Number:</span>
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>

      <button
        type="button"
        className="bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-700"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </form>
  );
}

CheckoutForm.propTypes = {
  handleBuyNow: PropTypes.func.isRequired,
};
