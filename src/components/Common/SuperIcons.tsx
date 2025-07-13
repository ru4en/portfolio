import React, { useMemo } from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import * as Gi from 'react-icons/gi';
import * as Pi from 'react-icons/pi';

interface SuperIconsProps {
  name: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  useNativeColors?: boolean;  // Add this line
}

const SuperIcons: React.FC<SuperIconsProps> = ({
  name,
  className,
  size = 'base',
  style,
  onClick,
  useNativeColors = false,  // Add this line
}) => {
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

      case 'pixelart':
        // Try Pixelart Icons (react-icons/pixelart)
        return (Pi as any)[`Pi${capitalizedName}`];
     
      default:
        // Try all libraries in order
        return (Si as any)[`Si${capitalizedName}`] ||
               (Di as any)[`Di${capitalizedName}`] ||
               (Fa as any)[`Fa${capitalizedName}`] ||
               (Gi as any)[`Gi${capitalizedName}`] ||
               (Md as any)[`Md${capitalizedName}`] ||
               (Pi as any)[`Pi${capitalizedName}`];
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
        transition: 'all 0.2s ease-in-out',
        cursor: onClick ? 'pointer' : 'inherit',
        color: useNativeColors ? 'inherit' : style?.color, // Add this line
        ...style,
      }}
    >
      <IconComponent 
        size={iconSize} 
        color={useNativeColors ? 'currentColor' : undefined}  // Add this line
      />
    </div>
  );
};

export default SuperIcons;


// Usage Example:
// <SuperIcons name="react" size="xl" onClick={() => console.log('Icon clicked!')} />
// <SuperIcons name="devicon:javascript" size="2xl" useNativeColors={true} />
// <SuperIcons name="fontawesome:coffee" size="lg" className="text-brown-500" />
// <SuperIcons name="material:home" size="base" style={{ color: 'blue' }} />
// <SuperIcons name="grommet:circle" size="3xl" />
// <SuperIcons name="pixelart:heart" size="4xl" className="text-red-500" />


// <SuperIcons />
// name: string
//    - The name of the icon, which can include a library prefix (e.g., "devicon:javascript").
//    - Options include:
//      - devicon: for Devicons
//      - fontawesome: for FontAwesome icons
//      - material: for Material Icons
//      - grommet: for Grommet Icons
//      - pixelart: for Pixelart Icons
//      - No prefix for Simple Icons or other libraries

// isSelected: boolean
//    - Optional. If true, applies a selected style to the icon.

// onChange: function
//    - Optional. Callback function for when the icon is clicked or selected.

// onRemove: function
//    - Optional. Callback function for when the icon is removed.

// onClick: function
//    - Optional. Callback function for when the icon is clicked.

// className: string
//    - Optional. Additional CSS classes to apply to the icon container.

// style: object
//    - Optional. Inline styles to apply to the icon container.

// size: string
//    - Optional. Size of the icon, can be 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', or '5xl'.
//    - Defaults to 'base'.

// useNativeColors: boolean
//    - Optional. If true, uses the icon's native colors instead of the style color.
//    - Defaults to false, meaning it will use the color defined in the style prop or the className.