// /src/components/CartItem.jsx
const CartItem = ({ item }) => {
    return (
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4"/>
          <span>{item.name}</span>
        </div>
        <span>${item.price}</span>
      </div>
    );
  }
  
  export default CartItem;
  