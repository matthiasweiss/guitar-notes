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
    <div className="flex h-full flex-col gap-4 rounded-md bg-slate-50 px-6 py-10 md:p-10 md:pb-44 md:pr-20 lg:h-fit">
      <div className="flex select-none items-center whitespace-nowrap text-gray-400">
        Guitar Toolkit
      </div>
      <ul className="flex flex-col gap-4">
        {LINKS.map((link) => {
          return (
            <li key={link.path}>
              <Link
                className={twMerge(
                  'text-gray-500 no-underline hover:border-gray-300',
                  pathname === link.path && 'text-black',
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
  );
};
