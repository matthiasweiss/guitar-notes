import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { CONTENT_MAX_WIDTH } from '../constants';

export const Layout = () => {
  const CONTAINER_CLASSES = `flex w-full flex-col items-center gap-4 ${CONTENT_MAX_WIDTH}`;

  return (
    <div className="min-w-screen flex flex-col items-center gap-4">
      <Navbar />
      <div className={CONTAINER_CLASSES}>
        <Outlet />
      </div>
    </div>
  );
};
