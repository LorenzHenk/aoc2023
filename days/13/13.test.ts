import { expect, describe, test } from '@jest/globals';
import { parseInput, solvePart1, solvePart2 } from './solution';

describe('13', () => {
  describe('part one', () => {
    test('input parsed', () => {
      const input = `#.##..##.
  ..#.##.#.
  ##......#
  ##......#
  ..#.##.#.
  ..##..##.
  #.#.##.#.

  #...##..#
  #....#..#
  ..##..###
  #####.##.
  #####.##.
  ..##..###
  #....#..#`;

      const result = parseInput(input);
      expect(result).toMatchSnapshot();
    });

    test('works with test input', () => {
      const input = `#.##..##.
      ..#.##.#.
      ##......#
      ##......#
      ..#.##.#.
      ..##..##.
      #.#.##.#.

      #...##..#
      #....#..#
      ..##..###
      #####.##.
      #####.##.
      ..##..###
      #....#..#`;

      const result = solvePart1(input);
      expect(result).toBe(405);
    });

    test('works with custom input', () => {
      const input = `#.##..##.
                    ..#.##.#.
                    ..#.##.#.
                    ##......#
                    ##......#`;

      const result = solvePart1(input);
      expect(result).toBe(400);
    });

    test('works with custom input', () => {
      const input = `..#.....##.
      .#..#..##.#
      .......###.
      ####.##.#.#
      ###.###....
      ###.###....
      ####.##.#.#
      .......####
      .#..#..##.#
      ..#.....##.
      ..#.....##.
      .#..#..##.#
      .......####`;

      const result = solvePart1(input);
      expect(result).toBe(1000);
    });
  });
  describe('part two', () => {
    test('works with test input', () => {
      const input = `#.##..##.
      ..#.##.#.
      ##......#
      ##......#
      ..#.##.#.
      ..##..##.
      #.#.##.#.

      #...##..#
      #....#..#
      ..##..###
      #####.##.
      #####.##.
      ..##..###
      #....#..#`;

      const result = solvePart2(input);
      expect(result).toBe(400);
    });
  });
});
