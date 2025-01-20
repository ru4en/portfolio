import { useState, useEffect } from 'react';
import SuperIcons from './SuperIcons';

const Background = ({ iconNames }: { iconNames: string[] }) => {
  const [icons, setIcons] = useState<string[]>([]);

  if (iconNames.length === 0) return null;

  useEffect(() => {
    const generateIcons = () => {
      return Array.from({ length: 256 }).map(() => {
        const randomIndex = Math.floor(Math.random() * iconNames.length);
        return iconNames[randomIndex];
      });
    };
    setIcons(generateIcons());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-50">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(200, 200, 200, 0.1) 50%, transparent 75%)',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
      <div className="grid grid-cols-8 gap-20 opacity-10 hover:opacity-20 transition-opacity duration-500">
        {icons.map((iconName, index) => (
          <div
            key={index}
            className="relative group"
            style={{
              transform: `rotate(-45deg)`,
            }}
          >
            <SuperIcons
              name={iconName}
              className="opacity-50 text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out transform group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12"
              size="5xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Background;