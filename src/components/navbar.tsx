import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { PATHS } from '../constants';

const LINKS = [
  { path: PATHS.HOME, label: 'Home' },
  { path: PATHS.GAME, label: 'Game' },
] as const;

export const Navbar = () => {
  const { pathname } = useLocation();
  const defaultClasses =
    'px-8 py-4 border-b-2 border-gray-200 hover:border-gray-300';
  const activeClasses = 'border-gray-700 hover:border-gray-700';

  return (
    <div className="flex w-full justify-center bg-gray-100">
      <div className="flex w-full max-w-[1200px] gap-8">
        <div className="flex select-none items-center text-gray-400">
          Guitar Toolkit
        </div>
        <ul className="flex gap-4 py-4">
          {LINKS.map((link) => {
            return (
              <li>
                <Link
                  key={link.path}
                  className={twMerge(
                    defaultClasses,
                    pathname === link.path && activeClasses,
                  )}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
