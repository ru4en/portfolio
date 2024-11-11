import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag, faCode, faLaptop, faMobileAlt, faCogs, faTerminal, faDatabase, faBoxOpen, faDharmachakra
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faReact, faAngular, faVuejs, faNodeJs, faPython, faJava, faSwift, faPhp, faHtml5, faCss3, faJs,
  faGithub, faLinkedin, faAndroid, faAws, faDocker, faLinux, faWindows
} from '@fortawesome/free-brands-svg-icons';

const SuperIcons: React.FC<{
  name: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}> = ({ name, className }) => {

  // Icon mapping inside the component
  const tagIconMap: { [key: string]: IconDefinition } = {
    'web': faLaptop,
    'mobile': faMobileAlt,
    'development': faCode,
    'automation': faCogs,
    'default': faTag,
    'react': faReact,
    'angular': faAngular,
    'vue': faVuejs,
    'node': faNodeJs,
    'python': faPython,
    'java': faJava,
    'swift': faSwift,
    'php': faPhp,
    'html': faHtml5,
    'css': faCss3,
    'javascript': faJs,
    'github': faGithub,
    'linkedin': faLinkedin,
    'android': faAndroid,
    'aws': faAws,
    'docker': faDocker,
    'kubernetes': faDharmachakra,
    'vm': faBoxOpen,
    'terraform': faCogs,
    'linux': faLinux,
    'windows': faWindows,
    'go': faCode,
    'typescript': faCode,
    'bash': faTerminal,
    'powershell': faTerminal,
    'tailwind': faCode,
    'bootstrap': faCode,
    'django': faPython,
    'numpy': faPython,
    'matplotlib': faPython,
    'postgresql': faDatabase,
    'js': faJs,
    'ts': faJs,
    'py': faPython,
    'pearl': faCode,
    'ruby': faCode,
    'rust': faCode,
  };

  return (
    <FontAwesomeIcon
      icon={tagIconMap[name.toLowerCase()] || tagIconMap[(name.split('.').pop() || '').toLowerCase()] || tagIconMap[(name.split('-').pop() || '').toLowerCase()] || tagIconMap['default']}
      className={`mr-3 text-lg ${className}`}
      style={{ color: 'currentColor' }}
    />
  );
};

export default SuperIcons;
