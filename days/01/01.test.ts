import { expect, describe, test } from '@jest/globals';
import { solve02 } from './solution';

describe('01', () => {
  describe('part two', () => {
    test('works with test input', () => {
      const input = `two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`;

      const result = solve02(input);
      expect(result).toBe(281);
    });
  });
});
