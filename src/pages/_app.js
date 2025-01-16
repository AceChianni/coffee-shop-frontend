// /src/pages/_app.js
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';  
import '../styles/globals.css';  

function MyApp({ Component, pageProps }) {
    return (
        <div data-theme="mytheme" className="main-container">
            <Navbar />
            <main className="pt-20">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;

