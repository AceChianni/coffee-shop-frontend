// /src/pages/_app.js
import Navbar from '../components/Navbar';  
import '../styles/globals.css';  
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="mytheme">
      <Navbar />
      <div className="pt-20"></div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
