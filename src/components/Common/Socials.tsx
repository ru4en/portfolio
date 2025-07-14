import React from 'react';
import SuperIcon from './SuperIcons';

import {
  faGithub, faLinkedin, faTwitter, faInstagram, faFacebook, faDiscord,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';  // Added more social icons

const Socials: React.FC<{
  name: string;
  url: string;
}> = ({ name, url }) => {


  return (
    <div>
      {/* Button with icon and text */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-300 m-1 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 flex items-center space-x-2 transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-600 scale-95 hover:scale-100"
        aria-label={`Visit my ${name}`} // Accessibility improvement
      >
        <SuperIcon
          name={name.toLowerCase()}
        />
        <span className="text-sm font-semibold">{name}</span> {/* Display name name with smaller text */}
      </a>
    </div>
  );
};

export default Socials;
