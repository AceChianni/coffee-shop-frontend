// // src/pages/auth/signin.jsz
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import LoginForm from '../../components/LoginForm';
// import axios from 'axios';
// import Link from 'next/link';

// export default function Signin() {
//   const router = useRouter();

//   // Check if user is already authenticated on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       router.push('/dashboard'); // Redirect to dashboard if logged in
//     }
//   }, [router]);

//   // Update handleLogin to call the backend API
//   async function handleLogin(formData) {
//     try {
//       // Send the login credentials to the backend for authentication
//       const response = await axios.post('https://bug-free-orbit-q777wx69x44wc95qp-3000.app.github.dev/auth/signin', {
//         email: formData.email,
//         password: formData.password,
//       });

//       // Check if login was successful (status code 200)
//       if (response.status === 200) {
//         const { token, user } = response.data;

//         // Store the token in localStorage (or cookies, depending on your preference)
//         localStorage.setItem('authToken', token);

//         // Check user role (isAdmin) and redirect accordingly
//         if (user.isAdmin) {
//           alert(`Welcome back, Admin ${formData.email}!`);
//           router.push('/admin/dashboard'); // Redirect to admin dashboard if admin
//         } else {
//           alert(`Welcome back, ${formData.email}!`);
//           router.push('/account'); // Redirect to user account page if regular user
//         }
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response?.data?.message || error.message);
//       alert('Invalid email or password.');
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-semibold mb-6" style={{ color: '#6E4B3A' }}>
//         Sign In
//       </h1>
//       <div className="w-full max-w-md p-6 bg-[#F1F7ED] shadow-lg rounded-xl">
//         <LoginForm 
//           buttonLabel="Login" 
//           handleLogin={handleLogin} 
//         />
//       </div>
//       <div className="mt-4">
//         <Link
//           href="/auth/signup"
//           className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6E4B3A]"
//           style={{ color: '#6E4B3A' }}
//         >
//           Don't have an account? Sign up here
//         </Link>
//       </div>
//     </div>
//   );
// }

// /src/pages/auth/signin.jsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginForm from '../../components/LoginForm';
import axios from 'axios';
import Link from 'next/link';

export default function Signin() {
  const router = useRouter();

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  // Handle login by calling the backend API
  async function handleLogin(formData) {
    try {
      // Send the login credentials to the backend for authentication
      const response = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      // Check if login was successful (response contains token and user)
      if (response.data.token && response.data.user) {
        const { token, user } = response.data;

        // Store the token in localStorage
        localStorage.setItem('authToken', token);

        // Redirect based on user role (isAdmin)
        if (user.isAdmin) {
          alert(`Welcome back, Admin ${formData.email}!`);
          router.push('/admin/dashboard');
        } else {
          alert(`Welcome back, ${formData.email}!`);
          router.push('/account');
        }
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
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
