import { expect, describe, test } from '@jest/globals';
import { solvePart1, solvePart2 } from './solution';

describe('21', () => {
  describe('part one', () => {
    test('works with test input', () => {
      const input = `
      ...........
      .....###.#.
      .###.##..#.
      ..#.#...#..
      ....#.#....
      .##..S####.
      .##..#...#.
      .......##..
      .##.#.####.
      .##..##.##.
      ...........
      `.trim();

      const result = solvePart1(input, 6);
      expect(result).toBe(16);
    });
  });
  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `
      ...........
      .....###.#.
      .###.##..#.
      ..#.#...#..
      ....#.#....
      .##..S####.
      .##..#...#.
      .......##..
      .##.#.####.
      .##..##.##.
      ...........
      `.trim();

      const result = solvePart2(input);
      expect(result).toBe(0);
    });
  });
});
