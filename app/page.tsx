// app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Pysoftware Services Platform</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Your go-to place for all educational services. Explore our features and services to enhance your learning experience.
        </p>
        <a
          href="#features"
          className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-bold hover:bg-gray-100 transition duration-300"
        >
          Explore Features
        </a>
      </section>

      {/* Main Content */}
      <main className="bg-gray-100 py-12 px-6">
        <section id="features" className="max-w-screen-lg mx-auto space-y-12">
          <h2 className="text-4xl font-semibold text-blue-600 text-center">Our Features</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Easy Navigation</h3>
                  <p className="text-gray-600">Easily navigate and search for educational content tailored to your needs.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Real-Time Updates</h3>
                  <p className="text-gray-600">Stay up-to-date with the latest educational content and trends.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <span className="text-2xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Secure Platform</h3>
                  <p className="text-gray-600">Your privacy is our priority. We ensure secure access and data protection.</p>
                </div>
              </li>
              {/* Add more features here */}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">Get Started Today</h3>
          <p className="text-xl mb-6">Join us and take the next step in your educational journey.</p>
          <a
            href="/contact"
            className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
