// /src/pages/index.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <main className="p-4">
        <h1>Welcome to Coffee Shop</h1>
        <p>Best coffee in town!</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
