// /src/components/Button.jsx
const Button = ({ label, onClick, type = "button", className = "" }) => {
    return (
      <button onClick={onClick} type={type} className={`px-4 py-2 bg-orange-500 text-white rounded ${className}`}>
        {label}
      </button>
    );
  }
  
  export default Button;
  