import { expect, describe, test } from '@jest/globals';
import {
  AlmanacMapping,
  applyMapping,
  parseInput,
  parseMappingBlock,
  parseSeedBlock,
  solvePart1,
  solvePart2,
} from './solution';

describe('05', () => {
  describe('part 1', () => {
    test('parses the seed line correctly', () => {
      const input = `seeds: 79 14 55 13`;

      const result = parseSeedBlock(input);
      expect(result).toEqual([79, 14, 55, 13]);
    });

    test('parses a mapping block correctly', () => {
      const input = `seed-to-soil map:
      50 98 2
      52 50 48`;

      const result = parseMappingBlock(input);
      expect(result).toEqual({
        from: 'seed',
        to: 'soil',
        mappingConfigurations: [
          {
            destinationStartId: 50,
            sourceStartId: 98,
            rangeLength: 2,
          },
          {
            destinationStartId: 52,
            sourceStartId: 50,
            rangeLength: 48,
          },
        ],
      });
    });

    test('works with test input', () => {
      const input = `seeds: 79 14 55 13

      seed-to-soil map:
      50 98 2
      52 50 48
      
      soil-to-fertilizer map:
      0 15 37
      37 52 2
      39 0 15
      
      fertilizer-to-water map:
      49 53 8
      0 11 42
      42 0 7
      57 7 4
      
      water-to-light map:
      88 18 7
      18 25 70
      
      light-to-temperature map:
      45 77 23
      81 45 19
      68 64 13
      
      temperature-to-humidity map:
      0 69 1
      1 0 69
      
      humidity-to-location map:
      60 56 37
      56 93 4`;

      const result = parseInput(input);
      expect(result.mappings.length).toBe(7);
    });

    test('apply mapping works fine for value in mapping', () => {
      const almanacMapping: AlmanacMapping = {
        from: 'seed',
        to: 'soil',
        mappingConfigurations: [
          { destinationStartId: 50, sourceStartId: 98, rangeLength: 2 },
          { destinationStartId: 52, sourceStartId: 50, rangeLength: 48 },
        ],
      };

      const value = 79;

      const result = applyMapping(value, almanacMapping);

      expect(result).toBe(81);
    });

    test('apply mapping returns original value if not in mapping', () => {
      const almanacMapping: AlmanacMapping = {
        from: 'seed',
        to: 'soil',
        mappingConfigurations: [
          { destinationStartId: 50, sourceStartId: 98, rangeLength: 2 },
          { destinationStartId: 52, sourceStartId: 50, rangeLength: 48 },
        ],
      };

      const value = 500;

      const result = applyMapping(value, almanacMapping);

      expect(result).toBe(500);
    });

    test('works with test input', () => {
      const input = `seeds: 79 14 55 13

      seed-to-soil map:
      50 98 2
      52 50 48
      
      soil-to-fertilizer map:
      0 15 37
      37 52 2
      39 0 15
      
      fertilizer-to-water map:
      49 53 8
      0 11 42
      42 0 7
      57 7 4
      
      water-to-light map:
      88 18 7
      18 25 70
      
      light-to-temperature map:
      45 77 23
      81 45 19
      68 64 13
      
      temperature-to-humidity map:
      0 69 1
      1 0 69
      
      humidity-to-location map:
      60 56 37
      56 93 4`;

      const result = solvePart1(input);
      expect(result).toBe(35);
    });
  });

  describe('part 2', () => {
    test('works with test input', () => {
      const input = `seeds: 79 14 55 13

      seed-to-soil map:
      50 98 2
      52 50 48
      
      soil-to-fertilizer map:
      0 15 37
      37 52 2
      39 0 15
      
      fertilizer-to-water map:
      49 53 8
      0 11 42
      42 0 7
      57 7 4
      
      water-to-light map:
      88 18 7
      18 25 70
      
      light-to-temperature map:
      45 77 23
      81 45 19
      68 64 13
      
      temperature-to-humidity map:
      0 69 1
      1 0 69
      
      humidity-to-location map:
      60 56 37
      56 93 4`;

      const result = solvePart2(input);
      expect(result).toBe(46);
    });
  });
});
