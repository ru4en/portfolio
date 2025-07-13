import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formBody = new URLSearchParams(Object.entries(formData));
      const response = await fetch(
        'https://send.pageclip.co/hkKqTgb3JqRLL16rUVVGGAQIBBx1ZWku/Website',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formBody.toString(),
        }
      );
  
      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="
    inset-0 duration-75 opacity-100 [background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] dark:[background-size:25px_25px]">
      <div className="p-10 flex flex-col items-center justify-center
    bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-100 to-gray-200 dark:from-transparent dark:to-gray-950
      text-gray-800 dark:text-white w-full">
        <h2 className="text-2xl font-semibold m-10">{'</ Contact Me >'}</h2>
        
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Have a question or want to work together? Feel free to send me a message!
          or email me at <a href="mailto:hello@rubenlopes.uk" className="text-green-500 dark:text-green-400 hover:underline">hello@rubenlopes.uk</a>
        </p>

        <div className="flex justify-center w-full">
          <div className="relative group w-full max-w-lg rounded-xl hover:rounded-2xl ring-4 hover:ring-0 hover:p-0 bg-gradient-to-tl from-cyan-500 via-green-500 to-blue-800 hover:from-green-500 hover:via-blue-500 hover:to-green-500 transition-all duration-100 ease-in-out shadow-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-cyan-500 via-green-500 to-blue-800 blur-xl opacity-50 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 ease-in-out"></div>
            
            <div className="relative bg-gray-300 dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full bg-opacity-90 backdrop-blur-md transform transition-transform duration-500 ease-in-out">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 h-32"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-2 px-4 rounded-md transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;