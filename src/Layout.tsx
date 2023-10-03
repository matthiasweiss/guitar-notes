import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export const Layout = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[1200px] flex-col gap-4">
        <Navbar />
        <div className="flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
