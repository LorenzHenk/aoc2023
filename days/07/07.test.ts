import { expect, describe, test } from '@jest/globals';
import { parseInput, solvePart1, solvePart2 } from './solution';
import { parseNumberString } from '../../util/parse';

describe('07', () => {
  describe('part 1', () => {
    test('parses test input correctly', () => {
      const input = `32T3K 765
      T55J5 684
      KK677 28
      KTJJT 220
      QQQJA 483`;

      const result = parseInput(input);
      expect(result.hands).toMatchSnapshot();
    });

    test('works with test input', () => {
      const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

      const result = solvePart1(input);
      expect(result).toBe(6440);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

      const result = solvePart2(input);
      expect(result).toBe(5905);
    });

    test('works with weird input', () => {
      const input = `JJJJJ 10
                     4JJJJ 100
                     22JJJ 1000
                     12345 10000
                     33J22 100000`;
      // 4JJJJ 22JJJ JJJJJ 33J22 12345
      // 500   4000  30    200000 10000
      const result = solvePart2(input);
      expect(result).toBe(214530);
    });
  });
});
