import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PATHS } from './constants';
import './index.css';
import App from './screens/App.tsx';
import { Game } from './screens/Game';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={PATHS.BASE} element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path={PATHS.GAME} element={<Game />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
