// /src/pages/checkout.jsx
import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutPage() {
  const handleBuyNow = () => {
    alert('Thank you for your patronage!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-secondary text-white p-4">
        <h2 className="text-2xl flex justify-center"> Checkout </h2>
      </header>
      <main className="container mx-auto p-8 flex flex-col gap-8">
        <CheckoutForm handleBuyNow={handleBuyNow} />
      </main>
    </div>
  );
}
