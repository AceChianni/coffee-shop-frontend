// src/pages/cart/checkout.jsx
import CheckoutForm from '../../components/CheckoutForm';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Check if there are any items saved in localStorage and load them
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage", error);
      }
    }
  }, []); 

  const handleBuyNow = () => {
    alert('Thank you for your patronage!');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-secondary text-white p-4">
        <h2 className="text-2xl flex justify-center"> Checkout </h2>
      </header>
      <main className="container mx-auto p-8 flex flex-col gap-8">
        <CheckoutForm 
          cartItems={cartItems} 
          handleBuyNow={handleBuyNow} 
        />
      </main>
    </div>
  );
}
