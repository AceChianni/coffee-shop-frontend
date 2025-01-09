// src/components/HeroSection.jsx

import Button from './Button';

const HeroSection = () => {
  return (
    <section
      className="hero bg-cover bg-center h-96 flex justify-center items-center text-center text-white"
      style={{ backgroundImage: 'url(/coffeeshop.jpg)' }} 
    >
      <div>
        <h2 className="text-4xl font-bold">Your Favorite Coffee Awaits</h2>
        <p className="mt-4 text-lg">Discover the best coffee in town, brewed just for you.</p>
        <Button label="Order Now" handleClick={() => alert('Order Now clicked!')} />
      </div>
    </section>
  );
};

export default HeroSection;
