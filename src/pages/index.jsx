// // /src/pages/index.jsx

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
