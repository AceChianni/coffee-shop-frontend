// /src/pages/products/index.jsx
import ProductCard from '../../components/ProductCard';
import mockProducts from '../../mocks/products.json';

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl">Our Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
