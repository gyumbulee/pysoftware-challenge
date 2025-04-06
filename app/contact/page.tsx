'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const ContactPage = () => {
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() === '') {
      setFeedbackMessage('Please enter a message.');
      return;
    }

    // In a real application, here you'd send the message to an API or email service
    console.log('Message sent:', { message });
    setFeedbackMessage('Your message has been sent!'); // Success feedback
    setMessage(''); // Clear the message input after submission
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl mb-4">Contact Us</h1>

      {/* Feedback Message */}
      {feedbackMessage && (
        <p className={`mb-4 ${feedbackMessage.startsWith('Your') ? 'text-green-500' : 'text-red-500'}`}>
          {feedbackMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded w-full"
          disabled={!message.trim()}
        >
          Send Message
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default ContactPage;
