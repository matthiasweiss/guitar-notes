import { ReactNode, useState } from 'react';
import { GuitarString, useGuitarStrings } from '../../hooks/use-guitar-strings';
import { Note, useNotes } from '../../hooks/use-notes';
import { calculateFret } from './calculate-fret';

type State = 'initial' | 'running' | 'stopped';

export const Game = () => {
  const [state, setState] = useState<State>('initial');
  const [selectedFret, setSelectedFret] = useState<number | null>(null);
  const [areFretsHighlighted, setAreFretsHighlighted] = useState(false);

  const { randomNote, notes } = useNotes();
  const { randomGuitarString } = useGuitarStrings();

  const currentNote: Note = randomNote();
  const currentString: GuitarString = randomGuitarString();
  const currentFret = calculateFret({
    note: currentNote,
    guitarString: currentString,
  });

  const start = () => {
    setState('running');
  };

  const stop = () => {
    setState('stopped');
  };

  const restart = () => {
    setState('initial');
  };

  const checkAnswer = (selectedFret: number) => {
    setSelectedFret(selectedFret);
    setAreFretsHighlighted(true);

    console.log(`Answer: ${selectedFret}, Correct: ${currentFret}`);
    if (selectedFret === currentFret) {
    }
  };

  const calculateClasses = (fret: number) => {
    if (!areFretsHighlighted) {
      return '';
    }

    if (fret === currentFret) {
      return 'bg-green-500';
    }

    if (fret === selectedFret) {
      return 'bg-red-500';
    }
  };

  const componentMap: Record<State, ReactNode> = {
    initial: (
      <>
        Initial <button onClick={start}>Start</button>
      </>
    ),
    running: (
      <div className="flex flex-col">
        Which fret is the {currentNote} note on the {currentString} string?
        {notes.map((note, index) => {
          return (
            <button
              key={note}
              onClick={() => checkAnswer(index)}
              className={calculateClasses(index)}
            >
              {index}
            </button>
          );
        })}
        <button onClick={stop}>Stop</button>
      </div>
    ),
    stopped: (
      <>
        Stopped <button onClick={restart}>Restart</button>
      </>
    ),
  };

  return componentMap[state];
};
