import { expect, describe, test } from '@jest/globals';
import { parseInput, solvePart1, solvePart2 } from './solution';

describe('08', () => {
  describe('part 1', () => {
    test('parses test input correctly', () => {
      const input = `RL

      AAA = (BBB, CCC)
      BBB = (DDD, EEE)
      CCC = (ZZZ, GGG)
      DDD = (DDD, DDD)
      EEE = (EEE, EEE)
      GGG = (GGG, GGG)
      ZZZ = (ZZZ, ZZZ)`;

      const result = parseInput(input);
      expect(result).toMatchSnapshot();
    });

    test('works with test input', () => {
      const input = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

      const result = solvePart1(input);
      expect(result).toBe(2);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `LR

      11A = (11B, XXX)
      11B = (XXX, 11Z)
      11Z = (11B, XXX)
      22A = (22B, XXX)
      22B = (22C, 22C)
      22C = (22Z, 22Z)
      22Z = (22B, 22B)
      XXX = (XXX, XXX)`;

      const result = solvePart2(input);
      expect(result).toBe(6);
    });
  });
});
