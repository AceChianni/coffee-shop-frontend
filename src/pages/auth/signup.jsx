// /src/pages/auth/signup.jsx
import { useRouter } from 'next/router';
import SignupForm from '../../components/SignupForm';

export default function Signup() {
  const router = useRouter();

  async function handleSignup(formData) {
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all the fields.');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        router.push('/auth/signin');
      } else {
        alert(data.message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Error during signup request:', err);
      alert('An error occurred while processing your request.');
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6 text-[#6E4B3A]">Sign Up</h1>
      <SignupForm buttonLabel="Sign Up" handleSignup={handleSignup} />
    </div>
  );
}
