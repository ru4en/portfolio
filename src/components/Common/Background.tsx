import { useState, useEffect } from 'react';
import SuperIcons from './SuperIcons';

enum StyleOptions {
  GRID = 'grid opacity-10 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  CLUTTERED = 'flex flex-wrap opacity-10 -m-20 relative overflow-hidden align-center justify-center',
}

interface BackgroundProps {
  iconNames: string[];
  rotate?: number | string;
  style?: keyof typeof StyleOptions;
}

const Background: React.FC<BackgroundProps> = ({ iconNames, rotate, style = 'GRID' }) => {
  const [icons, setIcons] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  if (iconNames.length === 0) return null;

  useEffect(() => {
    const generateIcons = () => {
      return Array.from({ length: 256 }).map(() => {
        const randomIndex = Math.floor(Math.random() * iconNames.length);
        return iconNames[randomIndex];
      });
    };
    setIcons(generateIcons());
    setIsMounted(true);
  }, []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out"
      style={{ opacity: isMounted ? 1 : 0 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(200, 200, 200, 0.1) 50%, transparent 75%)',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
      <div className={`${StyleOptions[style]} animate-spin-slow`}>
        {icons.map((iconName, index) => (
          <div
            key={index}
            className="relative group"
            style={{
              transform: `rotate(${rotate === 'RANDOM' ? Math.random() * 360 : rotate}deg)`,
            }}
          >
            <SuperIcons
              name={iconName}
              className="opacity-50 dark:text-gray-200 transition-all duration-300 ease-in-out transform group-hover:opacity-100"
              size="5xl"
              useNativeColors={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;