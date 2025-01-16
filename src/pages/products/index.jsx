// src/pages/products/index.jsx

// import { useEffect, useState } from 'react';
// import ProductCard from '../../components/ProductCard';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch product data from mock file
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/mocks/products.json');
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchData();
//   }, []);

//   // Handle add to cart
//   const handleAddToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProductIndex = cart.findIndex((item) => item._id === product._id);
    
//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1; 
//     } else {
//       cart.push({ ...product, quantity: 1 }); 
//     }
    
//     localStorage.setItem('cart', JSON.stringify(cart)); 
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//   <header className="bg-primary text-white p-4">
//     <h2 className="text-2xl text-center">Inkspresso Menu</h2>
//   </header>
//   <main className="container mx-auto p-8">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           handleAddToCart={handleAddToCart}
//         />
//       ))}
//     </div>
//   </main>
// </div>

//   );
// };

// export default Products;
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch product data from mock file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mocks/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  // Handle add to cart
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex((item) => item._id === product._id);
    
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1; 
    } else {
      cart.push({ ...product, quantity: 1 }); 
    }
    
    localStorage.setItem('cart', JSON.stringify(cart)); 
    // Suggest using a toast instead of an alert in production
    console.log(`${product.name} added to cart!`); // Log message instead of alert
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white p-4">
        <h2 className="text-2xl text-center">Inkspresso Menu</h2>
      </header>
      <main className="container mx-auto p-8">
        {error && <div className="text-red-500 text-center">{error}</div>} {/* Display error if any */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}  {/* Ensure you're using the correct field as the key */}
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
