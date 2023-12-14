import { expect, describe, test } from '@jest/globals';
import {
  extrapolateNextValue,
  parseInput,
  solvePart1,
  solvePart2,
} from './solution';

describe('09', () => {
  describe('part 1', () => {
    test('parses test input correctly', () => {
      const input = `0 3 6 9 12 15
      1 3 6 10 15 21
      10 13 16 21 30 45`;

      const result = parseInput(input);
      expect(result).toMatchSnapshot();
    });

    test('extrapolating value works fine for simple increment', () => {
      const result = extrapolateNextValue([0, 1, 2, 3]);
      expect(result).toBe(4);
    });

    test('extrapolating value works fine for simple decrement', () => {
      const result = extrapolateNextValue([4, 3, 2]);
      expect(result).toBe(1);
    });

    test('extrapolating value works fine for negative numbers', () => {
      const result = extrapolateNextValue([-4, -3, -2]);
      expect(result).toBe(-1);
    });

    test('works with test input', () => {
      const input = `0 3 6 9 12 15
      1 3 6 10 15 21
      10 13 16 21 30 45`;

      const result = solvePart1(input);
      expect(result).toBe(114);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `0 3 6 9 12 15
      1 3 6 10 15 21
      10 13 16 21 30 45`;

      const result = solvePart2(input);
      expect(result).toBe(2);
    });
  });
});
