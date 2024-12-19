import { useEffect } from 'react';

import TerminalPopup from './Term';
import Typewriter from '../Common/Typewriter';
import data from '../../../public/data.json';
import Socials from '../Common/Socials';

const Welcome = () => {
  const fullText = `Hello! I am Ruben, \n
  a student and developer. Welcome to my website!`;

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
      <div className="relative flex flex-col items-center justify-center h-screen bg-green-900 dark:bg-gray-900 shadow-lg overflow-hidden text-green-200 dark:text-green-400 pt-9 px-20">
        <div className="absolute inset-0 opacity-100 [background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] dark:[background-size:25px_25px]"></div>
    
        {/* Main content */}
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br overflow-hidden">
          <div className="flex flex-col items-center container mx-auto text-center h-[100vh]">
            <div className="flex text-4xl md:text-6xl font-bold items-center space-x-2 text-white dark:text-green-500 mt-20 p-3">
              <h1>
                <Typewriter fullText={fullText} />
              </h1>
            </div>
            <div className="flex flex-wrap overflow-x-auto justify-center p-5 md:px-20">
              {data.socials.map((social, index) => (
                <Socials key={index} name={String(social.name)} url={social.url ?? '#'} />
              ))}
            </div>
          </div>
    
          <TerminalPopup />
        </div>
      </div>
    );
    }  
export default Welcome;
