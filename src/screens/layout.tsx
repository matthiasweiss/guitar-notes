import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex h-screen w-full max-w-4xl lg:py-10">
        <Navbar />
        <div className="flex flex-1 justify-center p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
