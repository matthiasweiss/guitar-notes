import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { PATHS } from './constants';

const LINKS = [
  { path: PATHS.HOME, label: 'Home' },
  { path: PATHS.GAME, label: 'Game' },
] as const;

export const Navbar = () => {
  const { pathname } = useLocation();
  const defaultClasses = 'bg-gray-200 px-8 py-4';
  const activeClasses = 'bg-gray-300 text-gray-800';

  return (
    <ul className="flex py-4">
      <li>
        {LINKS.map((link) => {
          return (
            <Link
              className={twMerge(
                defaultClasses,
                pathname === link.path && activeClasses,
              )}
              to={link.path}
            >
              {link.label}
            </Link>
          );
        })}
      </li>
    </ul>
  );
};
