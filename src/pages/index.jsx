// /src/pages/index.jsx
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Home = () => {
  const [theme, setTheme] = useState('light'); // Default to light mode

  // Apply theme to the <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      {/* <Navbar /> */}
      <main className="p-4">
        <h1>Welcome to Coffee Shop</h1>
        <p>Best coffee in town!</p>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-accent flex items-center gap-2 p-2 rounded-md shadow-md"
        >
          {theme === 'light' ? (
            <BsFillMoonFill size={20} />
          ) : (
            <BsFillSunFill size={20} />
          )}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
