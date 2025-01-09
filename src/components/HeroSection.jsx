// src/components/HeroSection.jsx

import Button from './Button';

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center h-96" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}>
      <div className="flex justify-center items-center h-full text-center text-white">
        <div>
          <h2 className="text-4xl font-bold">Your Favorite Coffee Awaits</h2>
          <p className="mt-4 text-lg">Discover the best coffee in town, brewed just for you.</p>
          <Button label="Order Now" handleClick={() => alert('Order Now clicked!')} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
