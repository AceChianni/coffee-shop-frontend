// // /src/pages/products/index.jsx

import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from mock file
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/mocks/products.json');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  // Handle add to cart
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart!`);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
       <header className="bg-primary text-white p-4">
        <h2 className="text-2xl flex justify-center"> Inkspresso Menu </h2>
      </header>
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              handleAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
