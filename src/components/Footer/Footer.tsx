import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';  // Import icons from Lucide

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo-small.png" alt="logo" width={120} />
          </Link>
          <span className="text-gray-400 text-sm">© 2024 Ruben Lopes. All Rights Reserved.</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm text-gray-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/projects" className="hover:text-white">Projects</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </nav>
        
        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="https://github.com/ru4en" target="_blank" rel="noreferrer" className="hover:text-white">
            <Github size={24} color="currentColor" /> {/* GitHub Icon */}
          </a>
          <a href="https://linkedin.com/in/ru4en" target="_blank" rel="noreferrer" className="hover:text-white">
            <Linkedin size={24} color="currentColor" /> {/* LinkedIn Icon */}
          </a>
          <a href="mailto:jobs@rubenlopes.uk" className="hover:text-white">
            <Mail size={24} color="currentColor" /> {/* Email Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
