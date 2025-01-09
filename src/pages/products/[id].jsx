// /src/pages/products/[id].jsx
import products from '../../mocks/products.json';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // If product is found, render it; otherwise, show a default empty object
  const product = products.find(item => item.id.toString() === id) || {}; 

  // Event handler for adding to cart
  const handleAddToCart = () => {
    console.log(`${product.name} added to cart!`);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        {/* header component */}
      </header>
      <main className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <Button label="Add to Cart" handleClick={handleAddToCart} />
          </div>
        </div>
      </main>
    </div>
  );
}
