import { expect, describe, test } from '@jest/globals';
import {
  compareSpringConditionsToExpectedGroups,
  parseInput,
  solvePart1,
  solvePart2,
} from './solution';

describe('12', () => {
  describe('part one', () => {
    test('compares groups correctly', () => {
      const input = `#.#.### 1,1,3
      .#...#....###. 1,1,3
      .#.###.#.###### 1,3,1,6
      ####.#...#... 4,1,1
      #....######..#####. 1,6,5
      .###.##....# 3,2,1`;

      const result = parseInput(input);

      for (let data of result) {
        expect(compareSpringConditionsToExpectedGroups(data)).toBeTruthy();
      }
    });

    test('works with test input', () => {
      const input = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`;

      const result = solvePart1(input);
      expect(result).toBe(21);
    });
  });

  describe.skip('part two', () => {
    test('works with test input', () => {
      const input = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`;

      const result = solvePart2(input);
      expect(result).toBe(525152);
    });
  });
});
