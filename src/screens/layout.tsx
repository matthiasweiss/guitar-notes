import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen md:flex-col md:items-center">
      <Navbar />

      <div className="flex w-full max-w-3xl flex-1 justify-center p-4">
        <Outlet />
      </div>
    </div>
  );
};
