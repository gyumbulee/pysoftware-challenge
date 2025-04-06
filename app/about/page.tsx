// app/about/page.tsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        {/* About Section */}
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-6 text-center">About Us</h1>
          <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
            Pysoftware Services Ltd is a leading provider of educational solutions. Our platform offers
            a wide range of services for students, tutors, and educational institutions. We strive to
            make education accessible, engaging, and personalized.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to provide top-notch educational tools and resources to both learners and
            educators, fostering a culture of continuous growth and knowledge sharing.
          </p>
        </div>
      </div>


      {/* CTA Section */}
      <div className="bg-blue-500 py-12 text-center text-white">
        <h4 className="text-2xl font-semibold mb-4">Ready to Get Started?</h4>
        <p className="text-lg mb-6">Join us today and be a part of the future of education.</p>
        <a
          href="/contact"
          className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-bold hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
