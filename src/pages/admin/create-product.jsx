// pages/admin/create-product.jsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: '',
    stock: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post('http://localhost:5000/api/products/create', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Product created successfully');
      router.push('/admin/list-product');
    } catch (error) {
      console.error(error);
      alert('Error creating product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required />
      <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
      <button type="submit">Create Product</button>
    </form>
  );
}
