import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Answer } from './answer';
import { State } from './state';

type GameContextOptions = {
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  correctAnswers: Answer[];
  clearAnswer: () => void;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  selectedFret: number | null;
  setSelectedFret: React.Dispatch<React.SetStateAction<number | null>>;
  areFretsHighlighted: boolean;
  setAreFretsHighlighted: React.Dispatch<React.SetStateAction<boolean>>;
  start: () => void;
  restart: () => void;
  stop: () => void;
};

const GameContext = createContext<GameContextOptions | undefined>(undefined);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const correctAnswers = answers.filter(
    ({ fret, selectedFret }) => fret === selectedFret,
  );

  const [state, setState] = useState<State>('initial');

  const [selectedFret, setSelectedFret] = useState<number | null>(null);
  const [areFretsHighlighted, setAreFretsHighlighted] = useState(false);

  const start = () => {
    setState('running');
  };

  const restart = () => {
    clearAnswer();
    setAnswers([]);
    setState('running');
  };

  const stop = () => {
    setState('stopped');
  };

  const clearAnswer = () => {
    setAreFretsHighlighted(false);
    setSelectedFret(null);
  };

  return (
    <GameContext.Provider
      value={{
        answers,
        setAnswers,
        correctAnswers,
        clearAnswer,
        state,
        setState,
        selectedFret,
        setSelectedFret,
        areFretsHighlighted,
        setAreFretsHighlighted,
        start,
        restart,
        stop,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within a GameProvider!');
  }

  return context;
};
