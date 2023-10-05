import { ReactNode, useState } from 'react';
import { GuitarString, useGuitarStrings } from '../../hooks/use-guitar-strings';
import { Note, useNotes } from '../../hooks/use-notes';
import { calculateFret } from './calculate-fret';

type State = 'initial' | 'running' | 'stopped';

export const Game = () => {
  const [state, setState] = useState<State>('initial');

  const { randomNote, notes } = useNotes();
  const { randomString } = useGuitarStrings();

  const currentNote: Note = randomNote();
  const currentString: GuitarString = randomString();
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

  const componentMap: Record<State, ReactNode> = {
    initial: (
      <>
        Initial <button onClick={start}>Start</button>
      </>
    ),
    running: (
      <div className="flex flex-col">
        Which fret is the {currentNote} note on the {currentString} string?
        {notes.map((_, index) => {
          return <button>{index}</button>;
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
