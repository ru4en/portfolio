import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faTwitter, faInstagram, faFacebook, faDiscord,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';  // Added more social icons

const Socials: React.FC<{
  name: string;
  url: string;
}> = ({ name, url }) => {

  // Icon mapping for social names
  const nameIconMap: { [key: string]: IconDefinition } = {
    'github': faGithub,
    'linkedin': faLinkedin,
    'twitter': faTwitter,
    'instagram': faInstagram,
    'facebook': faFacebook,
    'discord': faDiscord,
    'default': faGithub, // Default to GitHub icon
  };

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
        <FontAwesomeIcon
          icon={nameIconMap[name.toLowerCase()] || nameIconMap['default']}
          className="text-xl" // Slightly increased icon size for better visibility
          style={{ color: 'currentColor' }}
          title={name}
        />
        <span className="text-sm font-semibold">{name}</span> {/* Display name name with smaller text */}
      </a>
    </div>
  );
};

export default Socials;
