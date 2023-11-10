import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { CONTENT_MAX_WIDTH, PATHS } from '../constants';

const LINKS = [
  { path: PATHS.HOME, label: 'Home' },
  { path: PATHS.GAME, label: 'Game' },
] as const;

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-screen justify-center bg-gray-100">
      <div className={twMerge('flex w-full gap-4', CONTENT_MAX_WIDTH)}>
        <div className="flex min-w-[100px] select-none items-center whitespace-nowrap py-4 text-gray-400">
          Guitar Toolkit
        </div>
        <ul className="flex gap-4 py-4">
          {LINKS.map((link) => {
            return (
              <li key={link.path}>
                <Link
                  className={twMerge(
                    'border-b-2 border-gray-200 px-8 py-4 no-underline hover:border-gray-300',
                    pathname === link.path &&
                      'border-gray-600 hover:border-gray-600',
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
