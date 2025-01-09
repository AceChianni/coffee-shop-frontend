// /src/pages/_app.js
import Navbar from '../components/Navbar';  
import '../styles/globals.css';  

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="mytheme">
      <Navbar />
      <div className="pt-20"></div>
      <Component {...pageProps} />
      
    </div>
  );
}

export default MyApp;
