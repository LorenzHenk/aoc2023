import { expect, describe, test } from '@jest/globals';
import { parseLine, solvePart1, solvePart2 } from './solution';

describe('03', () => {
  describe('part 1', () => {
    test('parses a line correctly', () => {
      const input = `467$..114..*.111`;

      const result = parseLine(input, 0);
      expect(result.numbers.length).toBe(3);
      expect(result.numbers[0].value).toBe(467);
      expect(result.symbols[0].value).toBe('$');
    });

    test('works with test input', () => {
      const input = `467..114..
      ...*......
      ..35..633.
      ......#...
      617*......
      .....+.58.
      ..592.....
      ......755.
      ...$.*....
      .664.598..`;

      const result = solvePart1(input);
      expect(result).toBe(4361);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `467..114..
      ...*......
      ..35..633.
      ......#...
      617*......
      .....+.58.
      ..592.....
      ......755.
      ...$.*....
      .664.598..`;

      const result = solvePart2(input);
      expect(result).toBe(467835);
    });
  });
});
