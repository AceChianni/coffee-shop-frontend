// /src/components/SignupForm.jsx

// import { useState } from 'react';
// import PropTypes from 'prop-types';

// export default function SignupForm({ buttonLabel, handleSignup }) {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSignup(formData);
//   };

//   return (
//     <form
//       className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
//       onSubmit={handleSubmit}
//     >
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Username</label>
//         <input
//           type="text"
//           name="username"
//           placeholder="Enter your username"
//           value={formData.username}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-md p-2 mt-1"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Email</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-md p-2 mt-1"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-md p-2 mt-1"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-green-500 text-white py-2 px-4 rounded-md font-medium w-full hover:bg-green-700"
//       >
//         {buttonLabel}
//       </button>
//     </form>
//   );
// }

// SignupForm.propTypes = {
//   buttonLabel: PropTypes.string.isRequired,
//   handleSignup: PropTypes.func.isRequired,
// };
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SignupForm({ buttonLabel, handleSignup }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md font-medium w-full hover:bg-green-700"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleSignup: PropTypes.func.isRequired,
};
