import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/navbar';

export const Layout = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Navbar />
      <div className="flex w-full max-w-[1200px] flex-col gap-4">
        <Outlet />
      </div>
    </div>
  );
};
