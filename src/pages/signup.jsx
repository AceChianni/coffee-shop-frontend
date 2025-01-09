import { useRouter } from 'next/router';
import SignupForm from '../components/SignupForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Signup() {
  const router = useRouter();

  function handleSignup() {
    alert('Sign up clicked!');
    // After the signup, redirect to Sign-In page
    router.push('/signin');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-start pt-8">
        <div>
          <h1 className="text-3xl font-semibold text-center mb-8">Sign Up</h1>
          <SignupForm buttonLabel="Sign Up" handleSignup={handleSignup} />
        </div>
      </div>
    </div>
  );
}
