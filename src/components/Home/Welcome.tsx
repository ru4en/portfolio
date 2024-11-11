import { useEffect } from 'react';

import TerminalPopup from './Term';
import Typewriter from '../Common/Typewriter';
import data from '../../../public/data.json';
import Socials from '../Common/Socials';

const Welcome = () => {
  const fullText = `Hello, World!
I am Ruben Lopes,
a Full Stack Developer.`;

  useEffect(() => {
    // Handle mouse move for background interaction
    const particles = document.querySelector('.particles');
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (particles) {
        particles.setAttribute('style', `background-position: ${x}% ${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="shadow-lg relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-teal-400 to-blue-500 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="flex flex-col items-center container mx-auto text-center">
        <div className="flex text-4xl md:text-6xl font-bold items-center space-x-2 text-white mt-20">
          <Typewriter fullText={fullText} />
        </div>
        <div className="flex flex-row items-center mt-4">
          {data.socials.map((social, index) => (
            <Socials key={index} name={String(social.name)} url={social.url ?? '#'} />
          ))}
        </div>
      </div>

      <TerminalPopup />
    </div>
  );
};

export default Welcome;
