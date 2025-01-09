// src/components/Navbar.jsx

import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a className={styles.link} href="/">Home</a>
        <a className={styles.link} href="/products">Menu</a>
        <a className={styles.link} href="/cart">Cart</a>
        <a className={styles.link} href="/signin">Sign In</a>
        <a className={styles.link} href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
