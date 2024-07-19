import { expect, describe, test } from '@jest/globals';
import { generateBlocksBetween, solvePart1, solvePart2 } from './solution';

describe('22', () => {
  describe('part one', () => {
    test('generateBlocksBetween works fine', () => {
      const result = generateBlocksBetween(
        { x: 1, y: 1, z: 1 },
        { x: 1, y: 1, z: 4 },
      );
      expect(result).toHaveLength(4);
    });
    test('works with test input', () => {
      const input = `1,0,1~1,2,1
0,0,2~2,0,2
0,2,3~2,2,3
0,0,4~0,2,4
2,0,5~2,2,5
0,1,6~2,1,6
1,1,8~1,1,9`.trim();

      const result = solvePart1(input);
      expect(result).toBe(5);
    });
  });
  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `1,0,1~1,2,1
0,0,2~2,0,2
0,2,3~2,2,3
0,0,4~0,2,4
2,0,5~2,2,5
0,1,6~2,1,6
1,1,8~1,1,9`.trim();

      const result = solvePart2(input);
      expect(result).toBe(0);
    });
  });
});
