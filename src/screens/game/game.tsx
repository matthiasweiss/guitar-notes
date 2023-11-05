import { ReactNode, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
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
        <div className="flex gap-4">
          This game is used to practice where the 12 different notes are located
          on each of the frets on the guitar. In each round, a random note and
          string are gnerated and you have to pick the correct fret for that
          note on the given string.
        </div>
        <a className="hover:cursor-pointer hover:underline" onClick={start}>
          Start game
        </a>
      </div>
    ),
    running: (
      <div className="border-1 flex w-full max-w-[640px] flex-col items-center gap-4 border-red-100">
        <div>
          Which fret is the {current.note} note on the {current.guitarString}{' '}
          string?
        </div>
        <div className="flex w-full flex-wrap justify-center gap-2">
          {notes.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => checkAnswer(index)}
                className={twMerge(
                  'border-1 h-10 w-10 rounded-full bg-gray-200',
                  calculateClasses(index),
                )}
              >
                {index}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={stop}>Stop</button>
          <button onClick={showNextQuestion} disabled={!selectedFret}>
            Next
          </button>
        </div>

        <div className="text-gray-400">
          {correctAnswers.length}/{answers.length} correct answers so far
        </div>
      </div>
    ),
    stopped: (
      <div>
        <div>
          Your final score was {correctAnswers.length}/{answers.length}!
        </div>
        <button onClick={restart}>Restart game</button>
      </div>
    ),
  };

  return componentMap[state];
};
