import { expect, describe, test } from '@jest/globals';
import { parseGame, solvePart1, solvePart2 } from './solution';

describe('02', () => {
  describe('part 1', () => {
    test('can parse a game line', () => {
      const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
      const game = parseGame(input);

      expect(game.id).toBe(1);
      expect(game.draws.length).toBe(3);
      expect(game.draws[0][0].color).toBe('blue');
    });

    test('works with test input', () => {
      const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
      Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
      Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
      Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
      Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      const result = solvePart1(input);
      expect(result).toBe(8);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      const result = solvePart2(input);
      expect(result).toBe(2286);
    });
  });
});
