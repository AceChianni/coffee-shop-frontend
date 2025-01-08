// /src/components/Navbar.jsx
const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl">Coffee Shop</div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/products" className="hover:text-orange-500">Products</a></li>
            <li><a href="/cart" className="hover:text-orange-500">Cart</a></li>
            <li><a href="/signin" className="hover:text-orange-500">Sign In</a></li>
            <li><a href="/signup" className="hover:text-orange-500">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  