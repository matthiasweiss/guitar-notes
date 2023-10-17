import { ReactNode, useMemo, useState } from 'react';
import { GuitarString, useGuitarStrings } from '../../hooks/use-guitar-strings';
import { Note, useNotes } from '../../hooks/use-notes';
import { calculateFret } from './calculate-fret';

type State = 'initial' | 'running' | 'stopped';

type Question = {
  note: Note;
  guitarString: GuitarString;
  fret: number;
};

type Answer = Question & {
  selectedFret: number;
};

export const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const correctAnswers = answers.filter(
    ({ fret, selectedFret }) => fret === selectedFret,
  );

  const [state, setState] = useState<State>('initial');
  const { randomNote, notes } = useNotes();
  const { randomGuitarString } = useGuitarStrings();

  const current = useMemo(() => {
    const note = randomNote();
    const guitarString = randomGuitarString();
    const fret = calculateFret({ note, guitarString });

    return {
      note,
      guitarString,
      fret,
    };
  }, [currentQuestion]);

  const [selectedFret, setSelectedFret] = useState<number | null>(null);
  const [areFretsHighlighted, setAreFretsHighlighted] = useState(false);

  const start = () => {
    setState('running');
  };

  const clearAnswer = () => {
    setAreFretsHighlighted(false);
    setSelectedFret(null);
  };

  const showNextQuestion = () => {
    clearAnswer();
    setCurrentQuestion((_currentQuestion) => _currentQuestion + 1);
  };

  const stop = () => {
    clearAnswer();
    setAnswers([]);
    setState('stopped');
  };

  const restart = () => {
    setState('running');
  };

  const checkAnswer = (selectedFret: number) => {
    setSelectedFret(selectedFret);
    setAreFretsHighlighted(true);

    setAnswers((_answers) => [..._answers, { ...current, selectedFret }]);
  };

  const calculateClasses = (fret: number) => {
    if (!areFretsHighlighted) {
      return '';
    }

    if (fret === current.fret) {
      return 'bg-green-500';
    }

    if (fret === selectedFret) {
      return 'bg-red-500';
    }
  };

  const componentMap: Record<State, ReactNode> = {
    initial: (
      <div>
        Initial <button onClick={start}>Start</button>
      </div>
    ),
    running: (
      <div className="flex flex-col">
        Which fret is the {current.note} note on the {current.guitarString}{' '}
        string?
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
        <button onClick={showNextQuestion}>Next</button>
        <button onClick={stop}>Stop</button>
        <div>
          {correctAnswers.length}/{answers.length} correct answers so far
        </div>
      </div>
    ),
    stopped: (
      <div>
        Stopped <button onClick={restart}>Restart</button>
      </div>
    ),
  };

  return componentMap[state];
};
