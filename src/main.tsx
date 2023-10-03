import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PATHS } from './constants';
import './index.css';
import { Game } from './screens/Game';
import App from './screens/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path={PATHS.GAME} element={<Game />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
