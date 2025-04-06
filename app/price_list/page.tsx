import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PricingPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl mb-4">Pricing</h1>
      <div className="space-y-4">
        {/* Basic Plan */}
        <div className="border p-4">
          <h3 className="text-xl">Basic Plan</h3>
          <p>Price: $20/month (₦10,000/month)</p>
        </div>
        
        {/* Pro Plan */}
        <div className="border p-4">
          <h3 className="text-xl">Pro Plan</h3>
          <p>Price: $50/month (₦25,000/month)</p>
        </div>

        {/* Premium Plan */}
        <div className="border p-4">
          <h3 className="text-xl">Premium Plan</h3>
          <p>Price: $100/month (₦50,000/month)</p>
        </div>

        {/* Enterprise Plan */}
        <div className="border p-4">
          <h3 className="text-xl">Enterprise Plan</h3>
          <p>Price: $250/month (₦125,000/month)</p>
        </div>

        {/* Custom Plan */}
        <div className="border p-4">
          <h3 className="text-xl">Custom Plan</h3>
          <p>Price: Contact us for a quote</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
