import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HelpPage = () => {
  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <section className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-semibold text-blue-600 mb-6">Help</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to the Help Center! Here you can find resources to help you navigate the platform.
          </p>
          
          {/* Help Resources List */}
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">How to use the platform?</h2>
              <p className="text-gray-600 mt-2">Learn how to get started with our platform and navigate its key features.</p>
              <a href="/help/how-to-use" className="text-blue-500 hover:underline mt-2 block">Read more...</a>
            </li>

            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Contact support for assistance</h2>
              <p className="text-gray-600 mt-2">Get in touch with our support team for assistance with any issue.</p>
              <a href="/contact" className="text-blue-500 hover:underline mt-2 block">Contact support</a>
            </li>

            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Find answers to the most common questions asked by our users.</p>
              <a href="/faq" className="text-blue-500 hover:underline mt-2 block">Go to FAQs</a>
            </li>

            {/* Add more help resources here */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpPage;
