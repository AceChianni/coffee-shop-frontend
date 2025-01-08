// /src/components/CartSummary.jsx
const CartSummary = ({ total }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl">Cart Summary</h2>
        <p>Total: ${total}</p>
      </div>
    );
  }
  
  export default CartSummary;
  