export interface Galaxy {
  x: number;
  y: number;
}

export interface ResearchImage {
  galaxies: Galaxy[];
  boundaries: {
    x: number;
    y: number;
  };
}

function parseLine(line: string, y: number): Galaxy[] {
  const galaxies: Galaxy[] = [];

  for (let index = 0; index < line.length; index++) {
    const character = line[index];
    if (character === '#') {
      galaxies.push({
        x: index,
        y,
      });
    }
  }

  return galaxies;
}

export function parseInput(input: string): ResearchImage {
  // ...#......
  // .......#..
  // #.........
  // ..........
  // ......#...
  // .#........
  // .........#
  // ..........
  // .......#..
  // #...#.....

  const lines = input.split('\n');

  const galaxies = lines.flatMap((line, index) =>
    parseLine(line.trim(), index),
  );

  return {
    galaxies,
    boundaries: {
      x: lines[0].length - 1,
      y: lines.length - 1,
    },
  };
}

export function simulateSpaceExpansion(
  data: ResearchImage,
  spaceExpansionRate = 1,
): ResearchImage {
  // rows
  for (let y = data.boundaries.y; y >= 0; y--) {
    const hasGalaxyInRow = data.galaxies.some((galaxy) => galaxy.y === y);
    if (!hasGalaxyInRow) {
      data.galaxies.forEach((galaxy) => {
        if (galaxy.y > y) {
          galaxy.y += spaceExpansionRate;
        }
      });
      data.boundaries.y += spaceExpansionRate;
    }
  }

  // columns
  for (let x = data.boundaries.x; x >= 0; x--) {
    const hasGalaxyInRow = data.galaxies.some((galaxy) => galaxy.x === x);
    if (!hasGalaxyInRow) {
      data.galaxies.forEach((galaxy) => {
        if (galaxy.x > x) {
          galaxy.x += spaceExpansionRate;
        }
      });
      data.boundaries.x += spaceExpansionRate;
    }
  }

  return data;
}

export function buildGalaxyPairs(data: ResearchImage): [Galaxy, Galaxy][] {
  const pairs: [Galaxy, Galaxy][] = [];

  for (let index = 0; index < data.galaxies.length - 1; index++) {
    for (
      let nextIndex = index + 1;
      nextIndex < data.galaxies.length;
      nextIndex++
    ) {
      pairs.push([data.galaxies[index], data.galaxies[nextIndex]]);
    }
  }

  return pairs;
}

export function distanceBetweenGalaxies(data: [Galaxy, Galaxy]): number {
  return Math.abs(data[0].x - data[1].x) + Math.abs(data[0].y - data[1].y);
}

export function solvePart1(input: string) {
  const space = parseInput(input);

  const expandedSpace = simulateSpaceExpansion(space);

  const pairs = buildGalaxyPairs(expandedSpace);

  let sum = 0;

  for (let pair of pairs) {
    sum += distanceBetweenGalaxies(pair);
  }

  return sum;
}

export function solvePart2(input: string, spaceExpansionRate = 1000000 - 1) {
  const space = parseInput(input);

  const expandedSpace = simulateSpaceExpansion(space, spaceExpansionRate);

  const pairs = buildGalaxyPairs(expandedSpace);

  let sum = 0;

  for (let pair of pairs) {
    sum += distanceBetweenGalaxies(pair);
  }

  return sum;
}
