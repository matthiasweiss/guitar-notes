import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex h-full w-full max-w-5xl gap-4 lg:py-10">
        <Navbar />
        <div className="flex flex-1 justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
