import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { ROUTES } from './routes';
import { Layout } from './screens/layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={ROUTES.home.path} element={<Layout />}>
          {Object.values(ROUTES).map(({ path, element, index }) => {
            return <Route path={path} element={element} index={index} />;
          })}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
