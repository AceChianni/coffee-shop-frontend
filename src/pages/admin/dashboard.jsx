import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is logged in and is an admin
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/auth/signin');
    } else {
      // Verify the user's token by decoding it or making an API call
      axios
        .get('http://localhost:5000/api/auth/verify', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.isAdmin) {
            setIsAdmin(true);
          } else {
            router.push('/');
          }
        })
        .catch(() => {
          router.push('/auth/signin');
        });
    }
  }, [router]);

  if (!isAdmin) {
    return <div>Loading...</div>; // Show loading state while verifying user role
  }

  return (
    <div className="admin-dashboard">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <div className="mt-6">
        <Link href="/admin/create-product">
          <a className="btn">Create Product</a>
        </Link>
        <Link href="/admin/list-product">
          <a className="btn">Manage Products</a>
        </Link>
        {/* Additional links for other pages */}
      </div>
    </div>
  );
}
