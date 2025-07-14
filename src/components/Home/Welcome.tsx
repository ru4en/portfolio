import { useEffect, useState } from 'react';

import TerminalPopup from './Term';
import Typewriter from '../Common/Typewriter';
import Socials from '../Common/Socials';
import data from '../../../public/data.json';
import Background from '../Common/Background';

const Welcome = () => {
  const fullText = data.site.welcome;

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
    <>


      <Background 
        iconNames={[
          'bug:fa',
          'docker',
          'terminal:fa',
          'graduation-cap:fa',
          'graduation-cap:fa',
          'graduation-cap:fa',
          'graduation-cap:fa',
          'graduation-cap:fa',
          'python',
          'python',
          'javascript',
          // 'react',
          'git',
          'linux',
          // 'typescript',
          // 'html5',
          // 'css3',
          'java',
          'go',
        ]} 
        layout="GRID"
        blink={true}
        className="bg-gradient-to-t from-gray-700 to-gray-500 dark:from-gray-900 dark:to-black fixed
        min-h-[100vh] items-center justify-center p-1 pb-5 max-w-full
        text-gray-100 dark:text-white"
      >
        <div className="flex flex-col w-full h-full min-h-[100vh]  relative">
          <div className="flex flex-col items-center text-center justify-center p-20 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60">
            <div className="text-3xl md:text-6xl font-bold space-x-2 text-gray-100 drop-shadow-lg dark:text-green-400">
              <h1 className="transition-transform duration-500 ease-in-out transform sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <Typewriter fullText={fullText} />
              </h1>
            </div>
            <div className="flex pb-5 md:px-20 z-10">
              {data.socials.map((social, index) => (
                <Socials key={index} name={String(social.name)} url={social.url ?? '#'} />
              ))}
            </div>
          </div>
          <TerminalPopup />
        </div>
      </Background>

      {/* Cursor glow dynamic position */}
      <div
        className="cursor-glow"
        style={{
          left: `${cursorGlowPosition.x}px`,
          top: `${cursorGlowPosition.y}px`,
        }}
      />
    </>
  );
};

export default Welcome;