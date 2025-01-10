// /src/pages/signin.jsx

import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

export default function Signin() {
  const router = useRouter();

  function handleLogin() {
    console.log('clicked sign in');
  }

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-grow flex justify-center items-start pt-8">
        <div>
          <h1 className="text-3xl font-semibold text-center mb-8">Sign In</h1>
          <LoginForm buttonLabel="Login" handleLogin={handleLogin} />
        </div>
      </div>
    
    </div>
  );
}
