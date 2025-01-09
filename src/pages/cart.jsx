// src/pages/cart.jsx

import { useState, useEffect } from 'react';
import CartItem from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart data from the mocks folder in the public directory
    fetch('/mocks/cart.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }
        return response.json();
      })
      .then((data) => {
        setCartItems(data.products); // Update state with the products array
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto p-8 flex flex-col gap-8">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                handleRemove={() => handleRemoveFromCart(item._id)}
              />
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-end">
            <Link href="/checkout">
              <button className="bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-700">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
