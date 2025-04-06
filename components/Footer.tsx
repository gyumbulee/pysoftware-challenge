// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Pysoftware Services Ltd. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy" className="mx-2 text-white-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="mx-2 text-white-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  