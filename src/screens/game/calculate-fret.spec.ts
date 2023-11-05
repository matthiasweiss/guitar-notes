import { describe, expect, it } from 'vitest';
import { GuitarString } from '../../hooks/use-guitar-strings';
import { calculateFret } from './calculate-fret';

describe('calculateFret', () => {
  it('returns correct fret for E string', () => {
    const guitarString: GuitarString = 'E';
    expect(calculateFret({ note: 'Eb', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'E', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'F', guitarString })).toStrictEqual(1);
  });

  it('returns correct fret for A string', () => {
    const guitarString: GuitarString = 'A';
    expect(calculateFret({ note: 'Ab', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'A', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'Bb', guitarString })).toStrictEqual(1);
  });

  it('returns correct fret for D string', () => {
    const guitarString: GuitarString = 'D';
    expect(calculateFret({ note: 'C#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'D', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'Eb', guitarString })).toStrictEqual(1);
  });

  it('returns correct fret for G string', () => {
    const guitarString: GuitarString = 'G';
    expect(calculateFret({ note: 'F#', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'G', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'Ab', guitarString })).toStrictEqual(1);
  });

  it('returns correct fret for B string', () => {
    const guitarString: GuitarString = 'B';
    expect(calculateFret({ note: 'Bb', guitarString })).toStrictEqual(11);
    expect(calculateFret({ note: 'B', guitarString })).toStrictEqual(0);
    expect(calculateFret({ note: 'C', guitarString })).toStrictEqual(1);
  });
});
