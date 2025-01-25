import React, { useMemo } from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import * as Gi from 'react-icons/gi';

const SuperIcons: React.FC<{
  name: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}> = ({ name, className, size = 'base', style, onClick }) => {
  // Extract the icon name and library, defaulting to devicon if no library specified
  const [rawIconName, providedLibrary = 'devicon'] = name.split(':');
 
  // Clean and normalize the icon name
  const normalizeIconName = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      // Convert to camel case
      .split(/[-_\s]+/)
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
  };

  // Clean the icon name
  const iconName = normalizeIconName(rawIconName);

  // Size mapping with consistent scaling
  const sizeMap: { [key: string]: number } = {
    sm: 10,     // 16px
    base: 16,   // 24px
    lg: 32,     // 32px
    xl: 48,     // 48px
    '2xl': 64,  // 64px
    '3xl': 80,  // 80px
    '4xl': 96,  // 96px
    '5xl': 128  // 128px
  };
  const iconSize = sizeMap[size] || sizeMap.base;

  // Get the appropriate icon component
  const IconComponent = useMemo(() => {
    const library = providedLibrary.toLowerCase();
    const capitalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);

    switch (library) {
      case 'devicon':
        // Try Simple Icons first, then Devicons
        return (Si as any)[`Si${capitalizedName}`] ||
               (Di as any)[`Di${capitalizedName}`];
     
      case 'fontawesome':
        // Try FontAwesome
        return (Fa as any)[`Fa${capitalizedName}`];
     
      case 'material':
        // Try Material Icons
        return (Md as any)[`Md${capitalizedName}`];
      
      case 'grommet':
        // Try Grommet Icons (react-icons/gi)
        return (Gi as any)[`Gi${capitalizedName}`];
     
      default:
        // Try all libraries in order
        return (Si as any)[`Si${capitalizedName}`] ||
               (Di as any)[`Di${capitalizedName}`] ||
               (Fa as any)[`Fa${capitalizedName}`] ||
               (Gi as any)[`Gi${capitalizedName}`] ||
               (Md as any)[`Md${capitalizedName}`];
    }
  }, [iconName, providedLibrary]);

  if (!IconComponent) {
    console.warn(`Icon not found: ${iconName} in library ${providedLibrary}`);
    return null;
  }

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: iconSize,
        height: iconSize,
        color: 'currentColor',
        transition: 'all 0.2s ease-in-out',
        cursor: onClick ? 'pointer' : 'inherit',
        ...style,
      }}
    >
      <IconComponent size={iconSize} />
    </div>
  );
};

export default SuperIcons;