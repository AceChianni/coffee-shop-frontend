// /src/pages/_app.js
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';  
import '../styles/globals.css';  
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');

    // Load theme from localStorage or fallback to light
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Toggle function
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`main-container ${theme === 'dark' ? 'bg-base-dark text-base-content-dark' : 'bg-base-100 text-base-content'}`} data-theme={theme}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main className="pt-20">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
