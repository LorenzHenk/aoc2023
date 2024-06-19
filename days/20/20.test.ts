import { expect, describe, test } from '@jest/globals';
import { parseInput, solvePart1, solvePart2 } from './solution';

describe('20', () => {
  describe('part one', () => {
    test('parsing works with test input', () => {
      const input = `broadcaster -> a, b, c
      %a -> b
      %b -> c
      %c -> inv
      &inv -> a`.trim();

      const result = parseInput(input);
      expect(result.modules).toMatchSnapshot();
    });

    test('works with test input A', () => {
      const input = `broadcaster -> a, b, c
      %a -> b
      %b -> c
      %c -> inv
      &inv -> a`.trim();

      const result = solvePart1(input);
      expect(result).toBe(32000000);
    });

    test('works with test input B', () => {
      const input = `broadcaster -> a
      %a -> inv, con
      &inv -> b
      %b -> con
      &con -> output`.trim();

      const result = solvePart1(input);
      expect(result).toBe(11687500);
    });
  });
  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`.trim();

      const result = solvePart2(input);
      expect(result).toBe(0);
    });
  });
});
