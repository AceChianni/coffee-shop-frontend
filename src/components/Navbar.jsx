// src/components/Navbar.jsx

import { useState, useEffect } from 'react';
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
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a className={styles.link} href="/">Home</a>
        <a className={styles.link} href="/products">Menu</a>
        <a className={styles.link} href="/cart">Cart</a>
        <a className={styles.link} href="/signin">Sign In</a>
        <a className={styles.link} href="/signup">Sign Up</a>
      </div>
      {/* Theme Toggle Button */}
      <div className={styles.themeToggle}>
        <button onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
