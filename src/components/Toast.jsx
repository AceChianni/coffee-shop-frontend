// /src/components/Toast.jsx
const Toast = ({ message, type = "success" }) => {
    return (
      <div className={`toast toast-${type} p-4 bg-green-500 text-white rounded`}>
        {message}
      </div>
    );
  }
  
  export default Toast;
  