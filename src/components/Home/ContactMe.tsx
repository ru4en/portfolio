import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  // Initialize state with TypeScript types
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<string>('');

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    try {
      const response = await fetch('https://forms.rlab.uk/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('Message Sent! I\'ll get back to you soon.');
        toast.success('Message Sent! I\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setFormStatus('Failed to send message. Please try again.');
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  
  <section id="contact" className="p-3 font-mono top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#aaaaaa_1px,transparent_1px)] [background-size:25px_25px]">
      <div className="container mx-auto max-w-3xl flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center m-10">{'</ Contact Me >'}</h2>
        <div className="flex justify-center w-full">
          <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {formStatus && (
              <div className="mt-4 text-center text-gray-400">
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactMe;