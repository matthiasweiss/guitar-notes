import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { PATHS } from '../constants';

const LINKS = [
  { path: PATHS.HOME, label: 'Home' },
  { path: PATHS.GAME, label: 'Game' },
] as const;

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-full flex-col gap-4 rounded-md bg-slate-50 px-6 py-10 sm:px-10 md:p-10 lg:h-fit lg:pb-44 lg:pr-20">
      <ul className="flex flex-1 flex-col gap-4">
        {LINKS.map((link) => {
          return (
            <li key={link.path}>
              <Link
                className={twMerge(
                  'text-gray-200 no-underline hover:text-gray-300',
                  pathname === link.path && 'text-gray-700 hover:text-gray-700',
                )}
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto text-gray-300">
        {window.innerWidth}x{window.innerHeight}px
      </div>
    </div>
  );
};
