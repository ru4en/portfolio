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
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
  
      const response = await fetch(
        'https://send.pageclip.co/hkKqTgb3JqRLL16rUVVGGAQIBBx1ZWku',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formBody.toString(),
        }
      );
  
      if (response.ok) {
        setFormStatus("Message Sent! I'll get back to you soon.");
        toast.success("Message Sent! I'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        const errorText = await response.text();
        setFormStatus(`Failed to send message: ${errorText}`);
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus(`Error: ${error}`);
      console.error("Submission error:", error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (

  <section id="contact" className="p-3 font-mono top-0 z-[-2] pb-20 min-h-screen  bg-[radial-gradient(#aaaaaa_1px,transparent_1px)] [background-size:25px_25px]">
    <script src="https://s.pageclip.co/v1/pageclip.js"></script>
    <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen"></link>
        <div className="container mx-auto max-w-3xl flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold m-10">{'</ Contact Me >'}</h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Have a question or want to work together? Feel free to send me a message!
          or email me at <a href="mailto:hello@rubenlopes.uk" className="text-green-500 dark:text-green-400 hover:underline">hello@rubenlopes.uk</a>
        </p>

        <div className="flex justify-center w-full">
        <div className="relative group w-full max-w-lg rounded-2xl p-1 
          bg-gradient-to-tl from-cyan-500 via-green-500 to-blue-800 
          hover:from-green-500 hover:via-blue-500 hover:to-green-500 
          transition-all duration-500 ease-in-out shadow-xl">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-cyan-500 via-green-500 to-blue-800 
          blur-xl opacity-50 group-hover:opacity-100 group-hover:blur-2xl 
          transition-all duration-500 ease-in-out"></div>
  
  <div className="relative bg-gray-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full 
          bg-opacity-90 backdrop-blur-md transform transition-transform duration-500 ease-in-out">
      
    <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
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
                  className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
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
                  className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full py-2 bg-green-700 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactMe;