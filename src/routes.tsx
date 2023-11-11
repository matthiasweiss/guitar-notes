import { Game } from './screens/game/game';
import { Home } from './screens/home/home';
import { Key } from './screens/key/key';

export type RouteDefinition = {
  path: string;
  element: JSX.Element;
  index?: true;
};

export const ROUTES: Record<string, RouteDefinition> = {
  home: { path: '/', element: <Home />, index: true },
  game: { path: '/game', element: <Game /> },
  key: { path: '/key', element: <Key /> },
} as const;
