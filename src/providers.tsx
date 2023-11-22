import { PropsWithChildren } from 'react';
import { GameProvider } from './screens/game/use-game';

export const Providers = ({ children }: PropsWithChildren) => {
  const providers = [GameProvider];

  return (
    <>
      {providers.reduceRight((innerProviders, Provider) => {
        return <Provider>{innerProviders}</Provider>;
      }, children)}
    </>
  );
};
