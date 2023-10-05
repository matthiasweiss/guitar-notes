import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from './constants';
import './index.css';
import { Game } from './screens/game/game.tsx';
import { Home } from './screens/home/home.tsx';
import { Layout } from './screens/layout/layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path={PATHS.GAME} element={<Game />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
