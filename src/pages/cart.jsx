// src/pages/cart.jsx
import { useState, useEffect } from 'react';
import CartItem from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Check if there are any items saved in localStorage and load them
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []); 

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
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
                handleRemoveFromCart={handleRemoveFromCart}
                handleQuantityChange={handleQuantityChange} 
              />
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <p className="text-lg font-semibold">Total: ${getTotalPrice()}</p>
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
