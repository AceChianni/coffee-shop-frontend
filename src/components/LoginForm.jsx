// // src/components/LoginForm.jsx

// import PropTypes from 'prop-types';
// import Button from './Button';

// export default function LoginForm({ buttonLabel, handleLogin }) {
//   return (
//     <form className="form space-y-4 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
//       <div>
//         <label htmlFor="email" className="block">Email</label>
//         <input
//           id="email"
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       <div>
//         <label htmlFor="password" className="block">Password</label>
//         <input
//           id="password"
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       <Button label={buttonLabel} handleClick={handleLogin} />
//     </form>
//   );
// }

// LoginForm.propTypes = {
//   buttonLabel: PropTypes.string.isRequired,
//   handleLogin: PropTypes.func.isRequired,
// };


// /src/components/LoginForm.jsx

import { useState } from 'react';

export default function LoginForm({ buttonLabel, handleLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
