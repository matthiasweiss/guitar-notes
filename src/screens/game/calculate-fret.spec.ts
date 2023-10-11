import { describe, expect, it } from 'vitest';
import { GuitarString } from '../../hooks/use-guitar-strings';
import { calculateFret } from './calculate-fret';

describe('calculateFret', () => {
  it('returns correct fret for E string', () => {
    const guitarString: GuitarString = 'E';
    expect(calculateFret({ note: 'C', guitarString })).toStrictEqual(8);
    expect(calculateFret({ note: 'C#', guitarString })).toStrictEqual(9);
    expect(calculateFret({ note: 'D', guitarString })).toStrictEqual(10);
    expect(calculateFret({ note: 'D#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'E', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'F', guitarString })).toStrictEqual(1);
    expect(calculateFret({ note: 'F#', guitarString })).toStrictEqual(2);
    expect(calculateFret({ note: 'G', guitarString })).toStrictEqual(3);
    expect(calculateFret({ note: 'G#', guitarString })).toStrictEqual(4);
    expect(calculateFret({ note: 'A', guitarString })).toStrictEqual(5);
    expect(calculateFret({ note: 'A#', guitarString })).toStrictEqual(6);
    expect(calculateFret({ note: 'B', guitarString })).toStrictEqual(7);
  });

  it('returns correct fret for A string', () => {
    const guitarString: GuitarString = 'A';
    expect(calculateFret({ note: 'C', guitarString })).toStrictEqual(3);
    expect(calculateFret({ note: 'C#', guitarString })).toStrictEqual(4);
    expect(calculateFret({ note: 'D', guitarString })).toStrictEqual(5);
    expect(calculateFret({ note: 'D#', guitarString })).toStrictEqual(6);
    expect(calculateFret({ note: 'E', guitarString })).toStrictEqual(7);
    expect(calculateFret({ note: 'F', guitarString })).toStrictEqual(8);
    expect(calculateFret({ note: 'F#', guitarString })).toStrictEqual(9);
    expect(calculateFret({ note: 'G', guitarString })).toStrictEqual(10);
    expect(calculateFret({ note: 'G#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'A', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'A#', guitarString })).toStrictEqual(1);
    expect(calculateFret({ note: 'B', guitarString })).toStrictEqual(2);
  });

  it('returns correct fret for D string', () => {
    const guitarString: GuitarString = 'D';
    expect(calculateFret({ note: 'C', guitarString })).toStrictEqual(10);
    expect(calculateFret({ note: 'C#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'D', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'D#', guitarString })).toStrictEqual(1);
    expect(calculateFret({ note: 'E', guitarString })).toStrictEqual(2);
    expect(calculateFret({ note: 'F', guitarString })).toStrictEqual(3);
    expect(calculateFret({ note: 'F#', guitarString })).toStrictEqual(4);
    expect(calculateFret({ note: 'G', guitarString })).toStrictEqual(5);
    expect(calculateFret({ note: 'G#', guitarString })).toStrictEqual(6);
    expect(calculateFret({ note: 'A', guitarString })).toStrictEqual(7);
    expect(calculateFret({ note: 'A#', guitarString })).toStrictEqual(8);
    expect(calculateFret({ note: 'B', guitarString })).toStrictEqual(9);
  });

  it('returns correct fret for G string', () => {
    const guitarString: GuitarString = 'G';
    expect(calculateFret({ note: 'C', guitarString })).toStrictEqual(5);
    expect(calculateFret({ note: 'C#', guitarString })).toStrictEqual(6);
    expect(calculateFret({ note: 'D', guitarString })).toStrictEqual(7);
    expect(calculateFret({ note: 'D#', guitarString })).toStrictEqual(8);
    expect(calculateFret({ note: 'E', guitarString })).toStrictEqual(9);
    expect(calculateFret({ note: 'F', guitarString })).toStrictEqual(10);
    expect(calculateFret({ note: 'F#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'G', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'G#', guitarString })).toStrictEqual(1);
    expect(calculateFret({ note: 'A', guitarString })).toStrictEqual(2);
    expect(calculateFret({ note: 'A#', guitarString })).toStrictEqual(3);
    expect(calculateFret({ note: 'B', guitarString })).toStrictEqual(4);
  });

  it('returns correct fret for B string', () => {
    const guitarString: GuitarString = 'B';
    expect(calculateFret({ note: 'C', guitarString })).toStrictEqual(1);
    expect(calculateFret({ note: 'C#', guitarString })).toStrictEqual(2);
    expect(calculateFret({ note: 'D', guitarString })).toStrictEqual(3);
    expect(calculateFret({ note: 'D#', guitarString })).toStrictEqual(4);
    expect(calculateFret({ note: 'E', guitarString })).toStrictEqual(5);
    expect(calculateFret({ note: 'F', guitarString })).toStrictEqual(6);
    expect(calculateFret({ note: 'F#', guitarString })).toStrictEqual(7);
    expect(calculateFret({ note: 'G', guitarString })).toStrictEqual(8);
    expect(calculateFret({ note: 'G#', guitarString })).toStrictEqual(9);
    expect(calculateFret({ note: 'A', guitarString })).toStrictEqual(10);
    expect(calculateFret({ note: 'A#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'B', guitarString })).toStrictEqual(0);
  });
});
