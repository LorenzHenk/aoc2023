import { expect, describe, test } from '@jest/globals';
import {
  followInstructions,
  parseInput,
  shoelaceArea,
  solvePart1,
  solvePart2,
} from './solution';

describe('18', () => {
  describe('part one', () => {
    test('follow instructions works fine', () => {
      const input = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`;

      const data = parseInput(input);
      const holes = followInstructions(data);

      const firstHole = holes.at(0)!;
      const lastHole = holes.at(-1)!;
      expect(firstHole).toEqual(lastHole);
      // initial hole is duplicate
      expect(holes.length).toBe(38 + 1);
    });

    test('works with test input', () => {
      const input = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`;

      const result = solvePart1(input);
      expect(result).toBe(62);
    });

    test('works with custom hard test input', () => {
      const input = `R 2 (#70c710)
D 2 (#0dc571)
R 2 (#5713f0)
U 2 (#d2c081)
R 2 (#59c680)
D 4 (#411b91)
L 6 (#8ceee2)
U 4 (#caa173)
`.trim();

      const result = solvePart1(input);
      expect(result).toBe(33);
    });

    test('shoelace area works', () => {
      const res = [
        [3, 4],
        [5, 11],
        [12, 8],
        [9, 5],
        [5, 6],
        [3, 4],
      ];

      const result = shoelaceArea(res.map((r) => ({ x: r[0], y: r[1] })));

      expect(result).toBe(30);
    });

    test('shoelace area works 2', () => {
      const res = [
        [0, 0],
        [2, 0],
        [2, 2],
        [0, 2],
        [0, 0],
      ];
      //
      `
      012345
      1  
      2  XxX
      3  xxx
      4  XxX
      5
      `;

      const result =
        shoelaceArea(res.map((r) => ({ x: r[0], y: r[1] }))) + res.length;

      expect(result).toBe(9);
    });
  });

  describe('part two', () => {
    test('works with test input', () => {
      const input = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`;

      const result = solvePart2(input);
      expect(result).toBe(952408144115);
    });
  });
});
