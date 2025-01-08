// /src/pages/_app.js

import Navbar from '../components/Navbar';  
import '../styles/globals.css';  

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-20"></div>
      <Component {...pageProps} /> {}
    </>
  );
}

export default MyApp;
