// /src/components/Navbar.js
import Link from 'next/link';
import styles from '../styles/navbar.module.css';  

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} fixed top-0 left-0 w-full shadow-md z-50`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Navbar Links */}
        <div className="flex space-x-8">
          {/* Home Link */}
          <Link href="/" className={`${styles.link} hover:text-secondary transition duration-300`}>
            Home
          </Link>
          <Link href="/products" className={`${styles.link} hover:text-secondary transition duration-300`}>
            Menu
          </Link>
          <Link href="/cart" className={`${styles.link} hover:text-secondary transition duration-300`}>
            Cart
          </Link>
          <Link href="/signup" className={`${styles.link} hover:text-secondary transition duration-300`}>
            Sign Up
          </Link>
          <Link href="/signin" className={`${styles.link} hover:text-secondary transition duration-300`}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
