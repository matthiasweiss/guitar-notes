import { ReactNode } from 'react';
import { State } from './state';
import { Initial } from './states/initial';
import { Running } from './states/running';
import { Stopped } from './states/stopped';
import { useGame } from './use-game';

export const Game = () => {
  const { state } = useGame();

  const componentMap: Record<State, ReactNode> = {
    initial: <Initial />,
    running: <Running />,
    stopped: <Stopped />,
  };

  return componentMap[state];
};
