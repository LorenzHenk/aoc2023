import { expect, describe, test } from '@jest/globals';
import { solvePart1, solvePart2 } from './solution';

describe('17', () => {
  describe('part one', () => {
    test('works with test input', () => {
      const input = `
2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`;

      const result = solvePart1(input);
      expect(result).toBe(102);
    });
  });
  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `
2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`;

      const result = solvePart2(input);
      expect(result).toBe(0);
    });
  });
});
