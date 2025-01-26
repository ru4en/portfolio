import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
        className={`${className} ${isActive ? 'font-semibold text-emerald-500' : 'dark:text-white'}`}
    >
        {children}
    </Link>
    );
}

export default NavLink;