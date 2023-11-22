import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ROUTES } from '../routes';

export const Navbar = () => {
  const { pathname } = useLocation();

  const routes = useMemo(
    () =>
      Object.entries(ROUTES).map(([name, { path }]) => {
        return { name, path };
      }),
    [ROUTES],
  );

  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-md bg-slate-50 px-6 py-10 md:h-fit md:w-full md:px-0 md:py-4">
      <ul className="flex w-full flex-col gap-4 md:max-w-3xl md:flex-row md:gap-8 md:px-4">
        {routes.map(({ name, path }) => {
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
