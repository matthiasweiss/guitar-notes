import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CircleOfFifths } from '../../../components/circle-of-fifths';
import { NOTES } from '../../../models/notes';
import { randomElement } from '../../../utils';
import { calculateFret } from '../calculate-fret';
import { GUITAR_STRINGS } from '../guitar-strings';
import { useGame } from '../use-game';

export const Running = () => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

  const current = useMemo(() => {
    const note = randomElement(NOTES);
    const guitarString = randomElement(GUITAR_STRINGS);
    const fret = calculateFret({ note, guitarString });

    return {
      note,
      guitarString,
      fret,
    };
  }, [currentQuestionNumber]);

  const {
    answers,
    areFretsHighlighted,
    correctAnswers,
    selectedFret,
    setAnswers,
    setAreFretsHighlighted,
    setSelectedFret,
    clearAnswer,
    stop,
  } = useGame();

  const showNextQuestion = () => {
    clearAnswer();
    setCurrentQuestionNumber((_currentQuestion) => _currentQuestion + 1);
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

  return (
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

              {NOTES.map((_, index) => {
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
  );
};
