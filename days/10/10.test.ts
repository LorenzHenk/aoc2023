import { expect, describe, test } from '@jest/globals';
import {
  canPipesConnect,
  findPipeline,
  parseInput,
  solvePart1,
  solvePart2,
} from './solution';
import pointInPolygon from '@turf/boolean-point-in-polygon';
import { point, polygon } from '@turf/helpers';

describe('10', () => {
  describe('part 1', () => {
    test('parses test input correctly', () => {
      const input = `.....
      .S-7.
      .|.|.
      .L-J.
      .....`;

      const result = parseInput(input);
      expect(result).toMatchSnapshot();
    });

    test('can connect pipes correctly', () => {
      expect(
        canPipesConnect([
          { symbol: 'S', x: 1, y: 1 },
          { symbol: '-', x: 2, y: 1 },
        ]),
      ).toBeTruthy();
      expect(
        canPipesConnect([
          { symbol: 'S', x: 1, y: 1 },
          { symbol: '-', x: 1, y: 2 },
        ]),
      ).toBeFalsy();
      expect(
        canPipesConnect([
          { symbol: 'L', x: 1, y: 1 },
          { symbol: 'J', x: 1, y: 2 },
        ]),
      ).toBeFalsy();
      expect(
        canPipesConnect([
          { symbol: 'L', x: 1, y: 1 },
          { symbol: 'J', x: 2, y: 1 },
        ]),
      ).toBeTruthy();
      expect(
        canPipesConnect([
          { symbol: 'L', x: 2, y: 1 },
          { symbol: 'J', x: 1, y: 1 },
        ]),
      ).toBeFalsy();
    });

    test('finds the pipeline', () => {
      const input = `-L|F7
      7S-7|
      L|7||
      -L-J|
      L|-JF`;

      const result = findPipeline(parseInput(input));

      expect(result.length).toBe(8);
    });

    test('finds the weirder pipeline', () => {
      const input = `..F7.
      .FJ|.
      SJ.L7
      |F--J
      LJ...`;

      const result = findPipeline(parseInput(input));

      expect(result.length).toBe(16);
    });

    test('works with test input', () => {
      const input = `.....
      .S-7.
      .|.|.
      .L-J.
      .....`;

      const result = solvePart1(input);
      expect(result).toBe(4);
    });

    test('works with test input', () => {
      const input = `..F7.
      .FJ|.
      SJ.L7
      |F--J
      LJ...`;

      const result = solvePart1(input);
      expect(result).toBe(8);
    });
  });

  describe('part 2', () => {
    test('aaa', () => {
      const input = `...........
      .S-------7.
      .|F-----7|.
      .||.....||.
      .||.....||.
      .|L-7.F-J|.
      .|..|.|..|.
      .L--J.L--J.
      ...........`;

      const parsedInput = parseInput(input);

      const pipeline = findPipeline(parsedInput);

      const poly = polygon([
        [
          ...pipeline.map((pipe) => [pipe.x * 10, pipe.y * 10]),
          [pipeline[0].x * 10, pipeline[0].y * 10],
        ],
      ]);

      expect(pointInPolygon(point([30, 30]), poly)).toBeFalsy();
      expect(pointInPolygon(point([20, 60]), poly)).toBeTruthy();
      expect(
        pointInPolygon(point([pipeline[0].x * 10, pipeline[0].y * 10]), poly),
      ).toBeTruthy();
    });

    test('works with test input', () => {
      const input = `...........
      .S-------7.
      .|F-----7|.
      .||.....||.
      .||.....||.
      .|L-7.F-J|.
      .|..|.|..|.
      .L--J.L--J.
      ...........`;

      const result = solvePart2(input);
      expect(result).toBe(4);
    });

    test('works with test input', () => {
      const input = `.F----7F7F7F7F-7....
      .|F--7||||||||FJ....
      .||.FJ||||||||L7....
      FJL7L7LJLJ||LJ.L-7..
      L--J.L7...LJS7F-7L7.
      ....F-J..F7FJ|L7L7L7
      ....L7.F7||L7|.L7L7|
      .....|FJLJ|FJ|F7|.LJ
      ....FJL-7.||.||||...
      ....L---J.LJ.LJLJ...`;

      const result = solvePart2(input);
      expect(result).toBe(8);
    });

    test('works with test input', () => {
      const input = `FF7FSF7F7F7F7F7F---7
      L|LJ||||||||||||F--J
      FL-7LJLJ||||||LJL-77
      F--JF--7||LJLJIF7FJ-
      L---JF-JLJIIIIFJLJJ7
      |F|F-JF---7IIIL7L|7|
      |FFJF7L7F-JF7IIL---7
      7-L-JL7||F7|L7F-7F7|
      L.L7LFJ|||||FJL7||LJ
      L7JLJL-JLJLJL--JLJ.L`;

      const result = solvePart2(input);
      expect(result).toBe(10);
    });
  });
});
