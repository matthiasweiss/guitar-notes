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
  const { guitarStrings, randomGuitarString } = useGuitarStrings();

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

  const reversedGuitarStrings = [...guitarStrings].reverse();

  // strings have a padding of pt-20 (= 80px) - height of note card (=40px) => 40px
  const currentStringPaddingTop =
    40 + reversedGuitarStrings.indexOf(current.guitarString) * 48 + 'px';

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
      return 'bg-green-600 text-green-100';
    }

    if (fret === selectedFret) {
      return 'bg-red-500 text-red-100';
    }
  };

  const componentMap: Record<State, ReactNode> = {
    initial: (
      <div className="flex flex-col gap-4">
        <div>
          This game is used to practice where the 12 different notes are located
          on each of the frets on the guitar. In each round, a random note and
          string are generated and you have to pick the correct fret for that
          note on the given string. The current string is determined by the
          location of the frets you can click.
        </div>
        <a className="hover:cursor-pointer hover:underline" onClick={start}>
          Start game
        </a>
      </div>
    ),

    running: (
      <div className="grid w-full max-w-2xl flex-col items-center gap-8">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 pt-20">
            {reversedGuitarStrings.map((guitarString) => {
              return (
                <div
                  key={guitarString}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-700 text-cyan-100"
                >
                  {guitarString}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <CircleOfFifths selected={current.note} />

            <div
              className="flex h-10 w-full justify-center gap-x-4"
              style={{ paddingTop: currentStringPaddingTop }}
            >
              {notes.map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => checkAnswer(index)}
                    disabled={selectedFret !== null}
                    className={twMerge(
                      'h-10 w-10 rounded-full bg-gray-200',
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

        <div className="flex justify-between">
          <div className="select-none rounded-full border border-gray-200 px-4 py-2 font-light text-gray-400">
            {correctAnswers.length}/{answers.length} correct answers so far
          </div>
          <div className="flex gap-4">
            <button
              className="rounded-full bg-gray-100 px-4 py-2 text-gray-800"
              onClick={stop}
            >
              Stop
            </button>
            <button
              className="rounded-full bg-gray-700 px-4 py-2 text-gray-100"
              onClick={showNextQuestion}
              disabled={selectedFret === null}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    ),

    stopped: (
      <div className="flex flex-col gap-4">
        <div>
          Your final score was {correctAnswers.length}/{answers.length}
        </div>
        <button
          className="rounded-full bg-gray-700 px-4 py-2 text-gray-100"
          onClick={restart}
        >
          Restart game
        </button>
      </div>
    ),
  };

  return componentMap[state];
};
