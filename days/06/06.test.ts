import { expect, describe, test } from '@jest/globals';
import { parseInput, solvePart1, solvePart2 } from './solution';
import { parseNumberString } from '../../util/parse';

describe('06', () => {
  describe('part 1', () => {
    test('parses test input correctly', () => {
      const input = `Time:      7  15   30
      Distance:  9  40  200`;

      const result = parseInput(input, (line) =>
        parseNumberString(line.split(':')[1]),
      );
      expect(result.races.length).toBe(3);
      expect(result.races).toMatchSnapshot();
    });

    test('works with test input', () => {
      const input = `Time:      7  15   30
      Distance:  9  40  200`;

      const result = solvePart1(input);
      expect(result).toBe(288);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `Time:      7  15   30
      Distance:  9  40  200`;

      const result = solvePart2(input);
      expect(result).toBe(71503);
    });
  });
});
