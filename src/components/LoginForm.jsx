// src/components/LoginForm.jsx

import PropTypes from 'prop-types';
import Button from './Button';

export default function LoginForm({ buttonLabel, handleLogin }) {
  return (
    <form className="form space-y-4 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="password" className="block">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <Button label={buttonLabel} handleClick={handleLogin} />
    </form>
  );
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
