// /src/components/Loader.jsx
const Loader = () => {
    return (
      <div className="flex justify-center items-center space-x-2">
        <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 w-8 h-8"></div>
        <span>Loading...</span>
      </div>
    );
  }
  
  export default Loader;
  