import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex h-full w-full max-w-5xl lg:py-10">
        <Navbar />
        <div className="lg:p4 flex flex-1 justify-center p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
