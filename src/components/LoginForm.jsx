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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label style={{ color: '#6E4B3A' }}>
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
      <label style={{ color: '#6E4B3A' }}>
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
        className="py-2 px-4 rounded hover:opacity-90 transition-all"
        style={{ backgroundColor: '#6E4B3A', color: '#F1F7ED' }}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
