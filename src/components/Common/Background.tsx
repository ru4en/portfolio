import { useState, useEffect, ReactNode } from 'react';
import SuperIcons from './SuperIcons';

enum StyleOptions {
  GRID = 'grid opacity-10 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  CLUTTERED = 'flex flex-wrap opacity-10 -m-20 relative overflow-hidden align-center justify-center',
}

interface BackgroundProps {
  iconNames: string[];
  rotate?: number | string;
  layout?: keyof typeof StyleOptions;
  className?: string;
  children?: ReactNode;
  blink?: boolean;
}

interface IconData {
  name: string;
  shouldBlink: boolean;
  delay: number;
  rotation: number;
}

const Background: React.FC<BackgroundProps> = ({ iconNames, rotate, layout = 'GRID', className = '', children, blink = false }) => {
  const [icons, setIcons] = useState<IconData[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  if (iconNames.length === 0) return children || null;

  useEffect(() => {
    const generateIcons = (): IconData[] => {
      return Array.from({ length: 256 }).map(() => {
        const randomIndex = Math.floor(Math.random() * iconNames.length);
        return {
          name: iconNames[randomIndex],
          shouldBlink: blink && Math.random() > 0.7, // 30% chance to blink
          delay: Math.random() * 3, // Random delay between 0-3 seconds
          rotation: rotate === 'RANDOM' ? Math.random() * 360 : (rotate as number) || 0
        };
      });
    };
    setIcons(generateIcons());
    setIsMounted(true);
  }, [blink, rotate]);

  return (
    <div 
      className={`relative transition-opacity duration-1000 ease-in-out overflow-hidden ${className}`}
      style={{ opacity: isMounted ? 1 : 0 }}
    >
      {/* Background icons */}
      <div className="absolute inset-0">
        <div className={`${StyleOptions[layout]} animate-spin-slow`}>
          {icons.map((iconData, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transform: `rotate(${iconData.rotation}deg)`,
              }}
            >
              <SuperIcons
                name={iconData.name}
                className={`opacity-50 dark:text-gray-200 transition-all duration-300 ease-in-out transform group-hover:opacity-100 ${iconData.shouldBlink ? 'animate-twinkle' : ''}`}
                style={{
                  animationDelay: iconData.shouldBlink ? `${iconData.delay}s` : undefined
                }}
                size="5xl"
                useNativeColors={true}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;


// USAGE:

// <Background
//   iconNames={['circle-exclamation', 'bug', 'beer-mug-empty']}
//   layout="CLUTTERED" | "GRID"
//   rotate="RANDOM"
// >
//   <p>Your content here</p>
//   <div>More content</div>
// </Background>