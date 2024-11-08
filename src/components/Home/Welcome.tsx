import React, { useEffect } from 'react';

const Welcome = () => {
  useEffect(() => {
    // Effect to add mouse move interaction
    const particles = document.querySelector('.particles');
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      particles?.setAttribute('style', `background-position: ${x}% ${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center transition-all duration-900
     justify-center bg-gradient-to-r dark:from-blue-500 dark:to-teal-500 dark:text-white text-gray-800 to-blue-300 from-teal-300">
      <div className="absolute top-0 left-0 w-full h-full particles bg-[url('/particles.png')] bg-fixed bg-cover transition-all duration-300"></div>

      <div className="relative text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore my projects, skills, and journey in the world of tech.
        </p>
        <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Welcome;
