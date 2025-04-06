'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate a login API call
    try {
      // You can replace this with an actual API call
      if (email === 'test@example.com' && password === 'password123') {
        console.log('Logged in:', { email, password });
        // Redirect to home/dashboard after successful login
        router.push('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl mb-4">Login</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <button
            type="submit"
            className={`p-2 text-white rounded w-full ${isLoading ? 'bg-gray-400' : 'bg-blue-500'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
