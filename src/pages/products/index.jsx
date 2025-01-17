// // src/pages/products/index.jsx

// import { useEffect, useState } from 'react';
// import ProductCard from '../../components/ProductCard';
// import Modal from '../../components/Modal';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [modalMessage, setModalMessage] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/mocks/products.json');
//         if (!response.ok) throw new Error('Failed to fetch products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProductIndex = cart.findIndex((item) => item._id === product._id);

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));

//     setModalMessage(`${product.name} added to cart!`);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-base-100 dark:bg-base-dark text-base-content dark:text-base-content-dark">
//       <header className="bg-primary text-white p-4 dark:bg-primary-dark">
//         <h2 className="text-2xl text-center">Inkspresso Menu</h2>
//       </header>
//       <main className="container mx-auto p-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product._id}
//               product={product}
//               handleAddToCart={handleAddToCart}
//             />
//           ))}
//         </div>
//       </main>

//       {showModal && <Modal message={modalMessage} onClose={closeModal} />}
//     </div>
//   );
// };

// export default Products;
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mocks/products.json');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setModalMessage(`${product.name} added to cart!`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 dark:bg-base-dark text-base-content dark:text-base-content-dark">
      <header className="bg-primary text-white p-4 dark:bg-primary-dark">
        <h2 className="text-2xl text-center">Inkspresso Menu</h2>
      </header>
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default Products;
