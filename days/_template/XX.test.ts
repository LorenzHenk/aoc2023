import { expect, describe, test } from '@jest/globals';
import { solvePart1, solvePart2 } from './solution';

describe('XX', () => {
  describe('part one', () => {
    test('works with test input', () => {
      const input = `two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`;

      const result = solvePart1(input);
      expect(result).toBe(0);
    });
  });
  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`;

      const result = solvePart2(input);
      expect(result).toBe(0);
    });
  });
});
