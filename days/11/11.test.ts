import { expect, describe, test } from '@jest/globals';
import {
  Galaxy,
  ResearchImage,
  buildGalaxyPairs,
  distanceBetweenGalaxies,
  parseInput,
  simulateSpaceExpansion,
  solvePart1,
  solvePart2,
} from './solution';

describe('11', () => {
  describe('part one', () => {
    test('works with test input', () => {
      const input = `...#......
      .......#..
      #.........
      ..........
      ......#...
      .#........
      .........#
      ..........
      .......#..
      #...#.....`;

      const result = parseInput(input);
      expect(result).toMatchSnapshot();
    });

    test('space expansion works', () => {
      const input: ResearchImage = {
        galaxies: [
          { x: 0, y: 0 },
          {
            x: 3,
            y: 2,
          },
        ],
        boundaries: {
          x: 3,
          y: 2,
        },
      };

      // #...
      // ....
      // ...#

      const result = simulateSpaceExpansion(input);
      expect(result.galaxies[0]).toEqual({ x: 0, y: 0 });
      expect(result.galaxies[1]).toEqual({ x: 5, y: 3 });
    });

    test('generating pairs works', () => {
      const input: ResearchImage = {
        galaxies: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 3, y: 2 },
        ],
        boundaries: {
          x: 3,
          y: 2,
        },
      };

      const result = buildGalaxyPairs(input);
      expect(result.length).toBe(6);
    });

    test('distance calculation is fine', () => {
      const input: [Galaxy, Galaxy] = [
        { x: 2, y: 5 },
        { x: 4, y: 1 },
      ];

      // .....
      // ....#
      // .....
      // .....
      // .....
      // ..#..

      const result = distanceBetweenGalaxies(input);
      expect(result).toBe(6);
    });

    test('works with test input', () => {
      const input = `...#......
    .......#..
    #.........
    ..........
    ......#...
    .#........
    .........#
    ..........
    .......#..
    #...#.....`;

      const result = solvePart1(input);
      expect(result).toBe(374);
    });
  });

  describe('part two', () => {
    test('works with test input', () => {
      const input = `...#......
      .......#..
      #.........
      ..........
      ......#...
      .#........
      .........#
      ..........
      .......#..
      #...#.....`;

      const result = solvePart2(input, 10 - 1);
      expect(result).toBe(1030);
    });
  });

  describe('part two', () => {
    test('works with test input', () => {
      const input = `...#......
      .......#..
      #.........
      ..........
      ......#...
      .#........
      .........#
      ..........
      .......#..
      #...#.....`;

      const result = solvePart2(input, 100 - 1);
      expect(result).toBe(8410);
    });
  });
});
