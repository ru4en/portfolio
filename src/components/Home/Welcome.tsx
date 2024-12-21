import { useEffect, useState } from 'react';

import TerminalPopup from './Term';
import Typewriter from '../Common/Typewriter';
import data from '../../../public/data.json';
import Socials from '../Common/Socials';

const Welcome = () => {
  const fullText = `Hello! I am Ruben,\n
  a student and developer. Welcome to my website!`;

  const [cursorGlowPosition, setCursorGlowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorGlowPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gray-700 dark:bg-gray-900 shadow-lg overflow-hidden dark:text-green-400 min-h-screen">
      {/* Cursor glow effect */}
      <style>{`
        .cursor-glow {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 100%;
          background: radial-gradient(circle, rgba(0, 192, 16, 0.37) 0%, rgba(0,255,0,0) 80%);
          pointer-events: none;
          mix-blend-mode: overlay;
          transform: translate(-50%, -50%);
          z-index: 1000;
        }
      `}</style>

      {/* Particle background */}
      <div
        className="particles absolute inset-0 duration-75 opacity-100 [background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] dark:[background-size:25px_25px]"
      ></div>

      {/* Main content */}
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col items-center text-center justify-center pt-20 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60">
          <div className="text-3xl md:text-6xl font-bold space-x-2 text-gray-100 drop-shadow-lg dark:text-green-400">
            <h1 className="transition-transform duration-500 ease-in-out transform">
              <Typewriter fullText={fullText} />
            </h1>
          </div>
          <div className="flex pb-5 md:px-20 z-10">
            {data.socials.map((social, index) => (
              <Socials key={index} name={String(social.name)} url={social.url ?? '#'} />
            ))}
          </div>
        </div>
        <div className="">
          <TerminalPopup />
        </div>
      </div>

      {/* Cursor glow dynamic position */}
      <div
        className="cursor-glow"
        style={{
          left: `${cursorGlowPosition.x}px`,
          top: `${cursorGlowPosition.y}px`,
        }}
      />
    </div>
  );
};

export default Welcome;
