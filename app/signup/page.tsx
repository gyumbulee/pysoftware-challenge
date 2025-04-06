'use client'; // This makes this file a client component
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous errors

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate a network request (replace with actual API call)
    setTimeout(() => {
      console.log('Signed up:', { email, password });
      // On successful signup:
      setIsSubmitting(false);
      // Redirect or show success message (e.g., `window.location.href = "/login"`)
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        
        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        
        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="p-2 text-white rounded w-full bg-blue-500" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default SignupPage;
