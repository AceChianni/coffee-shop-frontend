// // /src/pages/_app.js
// import Navbar from '../components/Navbar';  
// import Footer from '../components/Footer';  
// import '../styles/globals.css';  
// import { useState, useEffect } from 'react';

// function MyApp({ Component, pageProps }) {
//     const [theme, setTheme] = useState('light');

//     // Load theme from localStorage or fallback to light
//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme') || 'light';
//         setTheme(savedTheme);
//         document.documentElement.setAttribute('data-theme', savedTheme);
//     }, []);

//     // Toggle function
//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         document.documentElement.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//     };

//     return (
//         <div className={`main-container ${theme === 'dark' ? 'bg-base-dark text-base-content-dark' : 'bg-base-100 text-base-content'}`} data-theme={theme}>
//             <Navbar toggleTheme={toggleTheme} theme={theme} />
//             <main className="pt-20">
//                 <Component {...pageProps} />
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default MyApp;

// src/pages/_app.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');
    const router = useRouter();

    // Load theme from localStorage or fallback to light
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Redirect authenticated users away from auth pages
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const authPages = ['/auth/signin', '/auth/signup'];
        const isAuthPage = authPages.includes(router.pathname);

        if (token && isAuthPage) {
            router.push('/dashboard'); // Redirect to dashboard if logged in and on auth pages
        }
    }, [router]);

    return (
        <div
            className={`main-container ${
                theme === 'dark' ? 'bg-base-dark text-base-content-dark' : 'bg-base-100 text-base-content'
            }`}
            data-theme={theme}
        >
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main className="pt-20">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
