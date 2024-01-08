import { expect, describe, test } from '@jest/globals';
import { parseInput, solvePart1, solvePart2 } from './solution';

describe('15', () => {
  describe('part 1', () => {
    test('works with test input', () => {
      const input = `rn=1`;

      const result = solvePart1(input);
      expect(result).toBe(30);
    });

    test('works with test input', () => {
      const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;

      const result = solvePart1(input);
      expect(result).toBe(1320);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;

      const result = solvePart2(input);
      expect(result).toBe(145);
    });
  });
});
