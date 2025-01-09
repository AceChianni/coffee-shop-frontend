// src/components/SignupForm.jsx

import PropTypes from 'prop-types';
import Button from './Button';

export default function SignupForm({ buttonLabel, handleSignup }) {
  return (
    <form className="form space-y-4 max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <div>
        <label htmlFor="name" className="block">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

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

      <Button label={buttonLabel} handleClick={handleSignup} />
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleSignup: PropTypes.func.isRequired,
};
