import { ReactNode, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CircleOfFifths } from '../../components/circle-of-fifths';
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
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
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
  }, [currentQuestionNumber]);

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
    setCurrentQuestionNumber((_currentQuestion) => _currentQuestion + 1);
  };

  const stop = () => {
    setState('stopped');
  };

  const restart = () => {
    clearAnswer();
    setAnswers([]);
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
      return 'bg-green-600 text-green-100';
    }

    if (fret === selectedFret) {
      return 'bg-red-500 text-red-100';
    }
  };

  const componentMap: Record<State, ReactNode> = {
    initial: (
      <div className="flex flex-col gap-4 pt-6">
        <div>
          This game is used to practice where the 12 different notes are located
          on each fret on the guitar. In each round, a random note and string
          are generated and you have to pick the correct fret for that note on
          the given string. The current string is shown on the left (or on top
          if you are on mobile).
        </div>
        <a onClick={start}>Start game</a>
      </div>
    ),

    running: (
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex justify-center">
            <div className="flex gap-10 md:flex-col md:gap-4">
              <div className="pt-11 md:pl-11">
                <CircleOfFifths selected={current.note} />
              </div>

              <div className="flex w-full flex-col gap-2 md:flex-row md:gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 text-cyan-100">
                  {current.guitarString}
                </div>

                {notes.map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => checkAnswer(index)}
                      disabled={selectedFret !== null}
                      className={twMerge(
                        'h-9 w-9 rounded-full bg-gray-200 text-sm',
                        calculateClasses(index),
                      )}
                    >
                      {index}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 md:justify-between md:gap-4">
          <div className="w-fit select-none rounded-md border border-gray-200 px-4 py-2 font-light text-gray-400">
            <span className="tabular-nums">
              {correctAnswers.length}/{answers.length}
            </span>
          </div>
          <div className="flex gap-2 md:gap-4">
            <button
              className="rounded-md border border-gray-600 px-4 py-2 text-gray-600"
              onClick={stop}
            >
              Stop
            </button>
            <div className="flex gap-4">
              <button
                className="rounded-md bg-gray-700 px-4 py-2 text-gray-100"
                onClick={showNextQuestion}
                disabled={selectedFret === null}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    ),

    stopped: (
      <div className="flex flex-col gap-4 py-6">
        <div>
          Your final score was {correctAnswers.length}/{answers.length}
        </div>
        <button
          className="rounded-md bg-gray-700 px-4 py-2 text-gray-100"
          onClick={restart}
        >
          Restart game
        </button>
      </div>
    ),
  };

  return componentMap[state];
};
