// /src/components/LoginForm.jsx

import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-base-100 p-6 rounded shadow-lg">
      <label className="block mb-2 text-base-content">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <label className="block mb-2 text-base-content">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <button
        type="submit"
        className="py-2 px-4 rounded bg-primary text-white hover:bg-primary-focus transition-all"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
