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

const TagComponent: React.FC<{
  tag: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
}> = ({ tag, onChange, onRemove }) => {

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
    'teraform': faCogs,
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
    <span className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full
      px-3 py-1 text-sm font-semibold flex items-center transition-all duration-200 hover:bg-gray-400
      dark:hover:bg-gray-600 hover:scale-105">
      {/* Dynamically set the icon based on tag */}
      <FontAwesomeIcon
        icon={tagIconMap[tag.toLowerCase()] || tagIconMap[(tag.split('.').pop() || '').toLowerCase()] || tagIconMap[(tag.split('-').pop() || '').toLowerCase()] || tagIconMap['default']}
        className="mr-3 text-lg"
        style={{ color: 'currentColor' }}
      />
      {/* Conditionally render input field and delete button */}
      {onChange ? (
        <input
          type="text"
          value={tag}
          className="bg-transparent border-none outline-none text-gray-800 dark:text-gray-200 w-full min-w-0"
          onChange={onChange}
          aria-label={`Tag ${tag}`}
          style={{
            minWidth: tag.length === 0 ? '80px' : 'auto',
            maxWidth: `calc(${tag.length}ch + .5rem)`,
          }}
        />
      ) : (
        <span>{tag}</span>  // Just display the tag when no `onChange` is provided
      )}
      {onRemove && (
        <button type="button" onClick={onRemove} className="text-red-500">×</button>
      )}
    </span>
  );
};

export default TagComponent;
