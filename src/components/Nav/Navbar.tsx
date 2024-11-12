import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const savedPreference = localStorage.getItem('dark-mode');
    return savedPreference ? JSON.parse(savedPreference) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    // Apply dark mode class to the root element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('dark-mode', JSON.stringify(checked));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div className="fixed top-0 w-full z-50 px-4">
      <nav
        className={`mt-2 mx-auto navbar navbar-expand-md py-2 px-4 shadow-md rounded-xl backdrop-blur-md transition-all duration-300 w-full max-w-7xl 
          ${!isMenuOpen && isTop && location.pathname === '/' ? 'shadow-none backdrop-blur-none' : 'bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80'}`}
      >
        <div className="navbar-content flex items-center w-full">
          <div className="logo flex items-center">
            <Link to="/">
              <img src="/logo-small.png" alt="logo" width={120} className="transition-all duration-300 ease-in-out hover:scale-105 transform active:scale-95" />
            </Link>
          </div>

          <div className="ml-auto flex items-center space-x-6">
            <DarkModeSwitch
              style={{ width: '2rem' }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={24}
            />

            <div className="hidden md:flex space-x-8 pr-10">
              <Link to="/about-me" className="font-medium text-lg dark:text-white dark:hover:text-green-400 group flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                WHOAMI
              </Link>
              <Link to="/cv" className="font-medium text-lg dark:text-white dark:hover:text-green-400 group flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                cv.pdf
              </Link>
              <Link to="/blog" className="font-medium text-lg dark:text-white dark:hover:text-green-400 group flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                blog_
              </Link>
            </div>

            <div className="block md:hidden pt-2">
              <button
                onClick={handleMenuToggle}
                className="focus:outline-none transform transition-all duration-500 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 dark:text-white transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : ''}`}
                  fill="none"
                  viewBox="0 0 25 25"
                  stroke="currentColor"
                >
                  {/* Top line */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 6h15"
                    className={`transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-90 origin-center -translate-x-1.5' : ''}`}
                  />
                  {/* Middle line (hidden when open) */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h15"
                    className={`transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  {/* Bottom line */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.2 18h15"
                    className={`transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-135 origin-center -translate-y-1.5' : ''}`}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden w-full rounded-b-xl bg-opacity-80`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/about-me" className="font-medium text-lg dark:text-white dark:hover:text-green-400 group flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                WHOAMI
              </Link>
            </li>
            <li>
              <Link to="/cv" className="font-medium text-lg dark:text-white dark:hover:text-green-400 group flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                cv.pdf
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-medium text-lg dark:text-white dark:hover:text-green-400 group flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                blog_
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
