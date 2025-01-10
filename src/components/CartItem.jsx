// src/components/CartItem.jsx
// const CartItem = ({ item, handleRemoveFromCart }) => {
//   return (
//     <div className="flex justify-between items-center p-4 border-b">
//       <div className="flex items-center">
//         <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
//         <span>{item.name}</span>
//       </div>
//       <span>${item.price}</span>
//       <button 
//         className="ml-4 text-red-500 hover:text-red-700"
//         onClick={() => handleRemoveFromCart(item._id)} // Use _id to uniquely identify the product
//       >
//         Remove from Cart
//       </button>
//     </div>
//   );
// };

// export default CartItem;

// src/components/CartItem.jsx
const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
        <span>{item.name}</span>
      </div>
      <span>${item.price}</span>
      <button 
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={() => handleRemoveFromCart(item._id)} // Use _id to uniquely identify the product
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
