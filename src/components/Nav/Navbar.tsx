import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { toast } from 'react-toastify';
import { NavLink } from './NavLink';
import type { NavbarProps } from '../Types';

const NAV_LINKS = [
  { to: '/about-me', label: 'WHOAMI' },
  { to: '/projects', label: 'Projects' },
  { to: '/cv', label: 'CV' },
  { to: '/blog', label: 'Blog' },
] as const;

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false); // Initialize without immediate value

  // Initialize dark mode on mount and handle system preference changes
  useEffect(() => {
    const savedPreference = localStorage.getItem('dark-mode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const setInitialMode = () => {
      const shouldBeDark = savedPreference 
        ? JSON.parse(savedPreference)
        : systemPrefersDark.matches;
      
      setDarkMode(shouldBeDark);
      document.documentElement.classList.toggle('dark', shouldBeDark);
    };

    setInitialMode();

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('dark-mode') === null) {
        setDarkMode(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    systemPrefersDark.addEventListener('change', handleSystemChange);
    return () => systemPrefersDark.removeEventListener('change', handleSystemChange);
  }, []);

  // Add scroll position detection
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = useCallback((checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('dark-mode', JSON.stringify(checked));
    document.documentElement.classList.toggle('dark', checked);
    toast.info(`Switching to ${checked ? 'dark' : 'light'} mode`);
  }, []);

  const isTransparent = !isMenuOpen && isTop && location.pathname === '/';

  return (
    <div className="fixed top-0 w-full px-4 z-50">
      <nav className={`
        mt-2 mx-auto py-1 px-4 rounded-xl transition-all duration-300 
        w-full max-w-7xl 
        ${isTransparent 
          ? 'text-white shadow-none' 
          : 'bg-gray-200/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg backdrop-blur-md'
        }
      `}>
        {/* Navigation content */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-small.png" 
              alt="logo" 
              width={120} 
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            />
          </Link>

          <div className="flex items-center gap-6">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={40}
              sunColor="#FFA500"
              className="hover:bg-gray-100/10 p-2 rounded-full"
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink key={to} to={to}
                  className={`${isTransparent ? 'text-white' : 'text-emerald-500 dark:text-emerald-400'}
                    hover:bg-gray-300/10 p-2 rounded-lg transition-all duration-300`}
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none relative w-6 h-6"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`
                absolute block h-0.5 w-6 transform transition duration-300 ease-in-out
                ${isTransparent ? 'bg-white' : 'bg-gray-800 dark:bg-white'}
                ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
              `}></span>
              
              <span className={`
                absolute block h-0.5 w-6 transform transition duration-300 ease-in-out
                ${isTransparent ? 'bg-white' : 'bg-gray-800 dark:bg-white'}
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}></span>
              
              <span className={`
                absolute block h-0.5 w-6 transform transition duration-300 ease-in-out
                ${isTransparent ? 'bg-white' : 'bg-gray-800 dark:bg-white'}
                ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}
              `}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <ul className="flex flex-col items-center gap-4 py-4">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;