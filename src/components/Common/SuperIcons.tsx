import React from 'react';

const SuperIcons: React.FC<{
  name: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'; // Custom size options
}> = ({ name, className, size = 'base' }) => {
  // Icon mapping for Devicon inside the component
  const tagIconMap: { [key: string]: string } = {
    'html': 'devicon-html5-plain',
    'windows': 'devicon-windows11-original',
    'databases': 'devicon-postgresql-plain',
    'c, c++': 'devicon-cplusplus-plain',
    'vm': 'devicon-vsphere-plain ',
    'security': 'devicon-ssh-plain',
    'embeded systems': 'devicon-embeddedc-plain',
    'css': 'devicon-css3-plain'
  };



  const iconName = tagIconMap[name.toLowerCase()] || tagIconMap['default'];

  // Custom size values for each size option
  const sizeMap: { [key: string]: string } = {
    sm: '0.5rem', // Small size
    base: '1rem', // Default size
    lg: '3rem', // Large size
    xl: '4rem', // Extra Large size
    '2xl': '5rem', // 2x Large size
    '3xl': '6rem', // 3x Large size
    '4xl': '7rem', // 4x Large size
    '5xl': '8rem', // 5x Large size
  };

  // Assign the size dynamically based on the `size` prop
  const iconSize = sizeMap[size] || sizeMap.base;

  return (
    <i
      className={`${className} ${iconName} align-middle devicon-${name.toLowerCase()}-plain`}
      style={{
        color: 'currentColor',
        width: iconSize,
        height: iconSize,
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        fontSize: iconSize, // Adjust the font size based on the `size` prop
      }}
    ></i>
  );
};

export default SuperIcons;
