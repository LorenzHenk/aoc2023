import { expect, describe, test } from '@jest/globals';
import { move, solvePart1, solvePart2 } from './solution';

describe('14', () => {
  describe('part one', () => {
    test('I like to move it move it', () => {
      const input = ['O', '.', 'O', '#', '.', '.', 'O', 'O'] as const;
      const expected = ['O', 'O', '.', '#', 'O', 'O', '.', '.'];
      const result = move([...input]);
      expect(result).toEqual(expected);
    });

    test('works with test input', () => {
      const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

      const result = solvePart1(input);
      expect(result).toBe(136);
    });
  });

  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

      const result = solvePart2(input);
      expect(result).toBe(64);
    });
  });
});
