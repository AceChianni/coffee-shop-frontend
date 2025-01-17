// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-base-dark text-text-light' : 'bg-[#6E4B3A] text-[#6E4B3A]'}`}>
      <div className={`flex space-x-6 ${theme === 'dark' ? 'text-[#F1F7ED]' : 'text-[#6E4B3A]'}`}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/products" className={styles.link}>
          Menu
        </Link>
        <Link href="/cart/cart" className={styles.link}>
          Cart
        </Link>
        <Link href="/auth/signin" className={styles.link}>
          Sign In
        </Link>
      </div>

      {/* Theme Toggle Button */}
      <div className="relative">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`w-10 h-10 rounded-full flex justify-center items-center border-2 ${theme === 'dark' ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-gray-200'} hover:bg-gray-300 dark:hover:bg-gray-700 transition-all`}
        >
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2m-16 0H2m16.95-6.95l-1.414 1.414M6.343 6.343 4.93 4.93m12.02 12.02 1.415 1.415M6.344 17.657l-1.415 1.415" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.718 9.718 0 012.248 15.002a9.718 9.718 0 011.29-9.213m9.462-4.097a9.718 9.718 0 019.213 9.213M15.002 2.248A9.718 9.718 0 0112 21.75" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
