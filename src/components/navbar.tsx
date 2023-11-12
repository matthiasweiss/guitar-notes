import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ROUTES } from '../routes';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-full flex-col gap-4 rounded-md bg-slate-50 px-6 py-10 md:px-8 lg:h-fit lg:p-10 lg:pb-44 lg:pr-20">
      <ul className="flex flex-col gap-4">
        {Object.entries(ROUTES).map(([name, { path }]) => {
          return (
            <li key={path}>
              <Link
                className={twMerge(
                  'capitalize text-gray-200 no-underline hover:text-gray-300',
                  pathname === path && 'text-gray-700 hover:text-gray-700',
                )}
                to={path}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
