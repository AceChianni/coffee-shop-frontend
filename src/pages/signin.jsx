// /src/pages/signin.jsx

import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { validateUser } from '../utils/authUtils';

export default function Signin() {
  const router = useRouter();

  function handleLogin(formData) {
    const user = validateUser(formData.email, formData.password);

    if (user) {
      alert(`Welcome back, ${formData.email}!`);
      router.push('/dashboard');
    } else {
      alert('Invalid email or password.');
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Sign In</h1>
      <LoginForm buttonLabel="Login" handleLogin={handleLogin} />
    </div>
  );
}
