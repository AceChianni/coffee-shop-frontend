// /src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4"/>
        <h3 className="text-xl">{product.name}</h3>
        <p>{product.description}</p>
        <p className="font-bold text-xl">${product.price}</p>
      </div>
    );
  }
  
  export default ProductCard;
  