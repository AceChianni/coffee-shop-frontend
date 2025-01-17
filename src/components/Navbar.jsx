// // /src/components/Navbar.jsx
// import { useState } from 'react';
// import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
// import Link from 'next/link';  // Import Link component

// const Navbar = () => {
//   const [theme, setTheme] = useState('light');

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <nav className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-base-dark text-text-light' : 'bg-[#6E4B3A] text-text-dark'}`}>
//       <div className={`flex space-x-6 ${theme === 'dark' ? 'text-text-light' : 'text-text-dark'}`}>
//         {/* Navigation Links */}
//         <Link href="/" className="text-link dark:text-link-dark">Home</Link>
//         <Link href="/products" className="text-link dark:text-link-dark">Menu</Link>
//         <Link href="/cart/cart" className="text-link dark:text-link-dark">Cart</Link>
//         <Link href="/auth/signin" className="text-link dark:text-link-dark">Sign In</Link>
//       </div>

//       {/* Theme Toggle Button */}
//       <div className="relative">
//         <button
//           onClick={toggleTheme}
//           aria-label="Toggle Theme"
//           className={`w-10 h-10 rounded-full flex justify-center items-center border-2 ${theme === 'dark' ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-gray-200'} hover:bg-gray-300 dark:hover:bg-gray-700 transition-all`}
//         >
//           {theme === 'light' ? (
          //   <BsFillSunFill className="w-6 h-6 text-yellow-500" />
          // ) : (
          //   <BsFillMoonFill className="w-6 h-6 text-white" />
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// /src/components/Navbar.jsx
// /src/components/Navbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';


const Navbar = () => {
  const [theme, setTheme] = useState("sunset"); // Default theme

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dim") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "sunset" ? "dim" : "sunset"));
  };

  return (
    <nav className="navbar bg-primary text-base-content p-4 flex justify-between items-center">
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:underline">
          Menu
        </Link>
        <Link href="/cart/cart" className="hover:underline">
          Cart
        </Link>
        <Link href="/auth/signin" className="hover:underline">
          Sign In
        </Link>
      </div>

      {/* Theme Toggle Button */}
      <button
        className="themeToggle bg-accent text-base-content px-4 py-2 rounded font-semibold"
        onClick={toggleTheme}
      >
        {theme === "sunset" ? (<BsFillSunFill className="w-6 h-6 text-yellow-500" />
          ) : (
            <BsFillMoonFill className="w-6 h-6 text-white" />)}
      </button>
    </nav>
  );
};

export default Navbar;
