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


// USEAGE:

// <Background
//   iconNames={['circle-exclamation', 'bug', 'beer-mug-empty:']}
//   style="CLUTTERED"
//   rotate="RANDOM"
//   useNativeColors={true}
//   size="5xl"
// />

// <Background />
// iconNames: Array of icon names to display in the background. :. see SuperIcons documentation for valid names.
// style: Optional style for the background, defaults to 'GRID'. Can be 'GRID' or 'CLUTTERED'.
// rotate: Optional rotation for the icons, can be a number or 'RANDOM' for random rotation.
// useNativeColors: Optional boolean to use native colors for icons, defaults to true.
// size: Optional size for the icons, defaults to '5xl'.
// isMounted: Internal state to control the opacity transition of the background.