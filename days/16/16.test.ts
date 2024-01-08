import { expect, describe, test } from '@jest/globals';
import { solvePart1, solvePart2 } from './solution';

describe('16', () => {
  describe('part one', () => {
    test('works with test input', () => {
      const input = `.|...\\....
      |.-.\\.....
      .....|-...
      ........|.
      ..........
      .........\\
      ..../.\\\\..
      .-.-/..|..
      .|....-|.\\
      ..//.|....`;

      const result = solvePart1(input);
      expect(result).toBe(46);
    });
  });

  describe('part two', () => {
    test('works with test input', () => {
      const input = `.|...\\....
      |.-.\\.....
      .....|-...
      ........|.
      ..........
      .........\\
      ..../.\\\\..
      .-.-/..|..
      .|....-|.\\
      ..//.|....`;

      const result = solvePart2(input);
      expect(result).toBe(51);
    });
  });
});
