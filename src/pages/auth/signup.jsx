// /src/pages/auth/signup.jsx

import { useRouter } from 'next/router';
import SignupForm from '../../components/SignupForm';
import { saveUser, getUsers } from '../../utils/authUtils';

export default function Signup() {
  const router = useRouter();

  function handleSignup(formData) {
    // Check if all fields are filled
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all the fields.');
      return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        'Password must be at least 6 characters long, contain one number, and one special character.'
      );
      return;
    }

    // Check for existing user
    const users = getUsers();
    const existingUser = users.find((u) => u.email === formData.email);

    if (existingUser) {
      alert('This email is already registered.');
      return;
    }

    // Save new user
    saveUser(formData);
    alert('Registration successful!');
    router.push('/signin');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
      <SignupForm buttonLabel="Sign Up" handleSignup={handleSignup} />
    </div>
  );
}
