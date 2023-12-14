export type AlmanacMappingConfiguration = {
  destinationStartId: number;
  sourceStartId: number;
  rangeLength: number;
};

export type AlmanacMapping = {
  from: string;
  to: string;
  mappingConfigurations: AlmanacMappingConfiguration[];
};

export type Almanac = {
  seedIds: number[];
  mappings: AlmanacMapping[];
};

export function parseSeedBlock(input: string): number[] {
  // seeds: 79 14 55 13
  return input
    .trim()
    .split(': ')[1]
    .split(' ')
    .map((value) => parseInt(value));
}

export function parseMappingBlock(input: string): AlmanacMapping {
  // seed-to-soil map:
  // 50 98 2
  // 52 50 48

  const [firstLine, ...otherLines] = input.split('\n');

  const [, from, to] = firstLine.match(/(\w+)-to-(\w+)/)!;

  const mappingConfigurations: AlmanacMappingConfiguration[] = [];

  for (let line of otherLines) {
    // 50 98 2
    const [destinationStartId, sourceStartId, rangeLength] = line
      .trim()
      .split(' ')
      .map((value) => parseInt(value));

    mappingConfigurations.push({
      destinationStartId,
      sourceStartId,
      rangeLength,
    });
  }

  return { from, to, mappingConfigurations };
}

export function parseInput(input: string): Almanac {
  const blocks = input.split(/\n *\n/);
  const [seedBlock, ...mappingBlocks] = blocks;

  const seeds = parseSeedBlock(seedBlock);
  const mappings = mappingBlocks.map(parseMappingBlock);

  return { seedIds: seeds, mappings };
}

export function applyMapping(
  value: number,
  almanacMapping: AlmanacMapping,
): number {
  for (let mappingConfiguration of almanacMapping.mappingConfigurations) {
    if (
      value >= mappingConfiguration.sourceStartId &&
      value <
        mappingConfiguration.sourceStartId + mappingConfiguration.rangeLength
    ) {
      return (
        mappingConfiguration.destinationStartId +
        (value - mappingConfiguration.sourceStartId)
      );
    }
  }

  return value;
}

export function solvePart1(input: string): number {
  const almanac = parseInput(input);

  const locations = almanac.seedIds.map((seedId) => {
    // get location
    let currentValue = seedId;

    for (let mappingConfiguration of almanac.mappings) {
      currentValue = applyMapping(currentValue, mappingConfiguration);
    }

    return currentValue;
  });

  const minLocation = Math.min(...locations);

  return minLocation;
}

export function solvePart2(input: string): number {
  const almanac = parseInput(input);

  let minLocation = Infinity;

  for (let index = 0; index < almanac.seedIds.length; index += 2) {
    const baseSeedValue = almanac.seedIds[index];
    const seedRangeLength = almanac.seedIds[index + 1];
    for (let seedOffset = 0; seedOffset < seedRangeLength; seedOffset++) {
      const seedValue = baseSeedValue + seedOffset;

      // get location
      let currentValue = seedValue;

      for (let mappingConfiguration of almanac.mappings) {
        currentValue = applyMapping(currentValue, mappingConfiguration);
      }

      minLocation = Math.min(minLocation, currentValue);
    }
  }

  return minLocation;
}
