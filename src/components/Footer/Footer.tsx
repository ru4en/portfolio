import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react'; // Import icons from Lucide

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 py-8 px-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo-small.png" alt="logo" width={120} className="transition-transform transform hover:scale-110" />
          </Link>
          <span className="text-gray-200 text-sm lg:text-base opacity-80">© 2024 Ruben Lopes. All Rights Reserved.</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-sm text-gray-200 lg:text-base">
          <Link to="/" className="hover:text-gray-100 transform hover:scale-105 transition-all duration-300">Home</Link>
          <Link to="/about-me" className="hover:text-gray-100 transform hover:scale-105 transition-all duration-300">About</Link>
          <Link to="/cv" className="hover:text-gray-100 transform hover:scale-105 transition-all duration-300">CV</Link>
          <Link to="/projects" className="hover:text-gray-100 transform hover:scale-105 transition-all duration-300">Projects</Link>
        </nav>
        
        {/* Social Links */}
        <div className="flex space-x-8 text-xl">
          <a href="https://github.com/ru4en" target="_blank" rel="noreferrer" className="hover:text-gray-100 transform hover:scale-110 transition-all duration-300">
            <Github size={28} color="currentColor" />
          </a>
          <a href="https://linkedin.com/in/ru4en" target="_blank" rel="noreferrer" className="hover:text-gray-100 transform hover:scale-110 transition-all duration-300">
            <Linkedin size={28} color="currentColor" />
          </a>
          <a href="mailto:jobs@rubenlopes.uk" className="hover:text-gray-100 transform hover:scale-110 transition-all duration-300">
            <Mail size={28} color="currentColor" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
