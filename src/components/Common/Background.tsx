import { useState, useEffect } from 'react';
import SuperIcons from './SuperIcons';

const Background = ({ iconNames }: {
  iconNames: string[]





}) => {
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
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(200, 200, 200, 0.1) 50%, transparent 75%)',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
      <div className="grid opacity-10 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
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
              className="opacity-50 text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out transform group-hover:opacity-100"
              size="5xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Background;