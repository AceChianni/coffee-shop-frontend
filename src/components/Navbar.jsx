// /src/components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Navbar Links */}
        <div className="flex">
          {/* Home Link */}
          <Link href="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-400 transition duration-300">
            Products
          </Link>
          <Link href="/cart" className="hover:text-yellow-400 transition duration-300">
            Cart
          </Link>
          <Link href="/signup" className="hover:text-yellow-400 transition duration-300">
            Sign Up
          </Link>
          <Link href="/signin" className="hover:text-yellow-400 transition duration-300">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
