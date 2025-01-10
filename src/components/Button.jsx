// const Button = ({ label, handleClick }) => {
//   return (
//     <button 
//       className="bg-primary text-white py-2 px-4 mt-4 rounded-lg hover:bg-accent" 
//       onClick={handleClick}>
//       {label}
//     </button>
//   );
// };

// export default Button;
// src/components/Button.jsx

const Button = ({ label, handleClick }) => {
  return (
    <button
      className="bg-primary text-white py-2 px-4 mt-4 rounded-lg hover:bg-accent"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;