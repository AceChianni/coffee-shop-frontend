// /src/pages/auth/signin.jsx

import { useRouter } from 'next/router';
import LoginForm from '../../components/LoginForm';
import { validateUser } from '../../utils/authUtils';
import Link from 'next/link';

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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-6" style={{ color: '#6E4B3A' }}>
        Sign In
      </h1>
      <div className="w-full max-w-md p-6 bg-[#F1F7ED] shadow-lg rounded-xl">
        <LoginForm 
          buttonLabel="Login" 
          handleLogin={handleLogin} 
        />
      </div>
      <div className="mt-4">
        <Link
          href="/auth/signup"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6E4B3A]"
          style={{ color: '#6E4B3A' }}
        >
          Don't have an account? Sign up here
        </Link>
      </div>
    </div>
  );
}
