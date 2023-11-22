import { useMemo } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Providers } from './providers';
import { ROUTES } from './routes';
import { Layout } from './screens/layout.tsx';

export const App = () => {
  const routes = useMemo(
    () =>
      Object.entries(ROUTES).map(([name, props]) => {
        return { name, ...props };
      }),
    [],
  );

  return (
    /* HashRouter is used since GH pages do not support BrowserRouter */
    <HashRouter>
      <Providers>
        <Routes>
          <Route path={ROUTES.home.path} element={<Layout />}>
            {routes.map(({ name, path, element, index }) => {
              return (
                <Route key={name} path={path} element={element} index={index} />
              );
            })}
          </Route>
        </Routes>
      </Providers>
    </HashRouter>
  );
};
