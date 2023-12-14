type CubeCount = {
  count: number;
  color: 'red' | 'blue' | 'green';
};

type Draw = CubeCount[];

type Game = {
  id: number;
  draws: Draw[];
};

function parseCubeCount(input: string): CubeCount {
  // 3 blue
  const [countString, color] = input.trim().split(' ');

  return {
    color: color as CubeCount['color'],
    count: parseInt(countString),
  };
}

function parseDraw(input: string): Draw {
  // 3 blue, 4 red
  const cubeCountInputs = input.trim().split(',');

  return cubeCountInputs.map(parseCubeCount);
}

export function parseGame(input: string): Game {
  // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  const [gameDefinition, rest] = input.split(':');
  const gameId = parseInt(gameDefinition.split(' ').pop()!);

  const drawsInput = rest.split(';');

  return {
    id: gameId,
    draws: drawsInput.map(parseDraw),
  };
}

function parseInput(input: string): Game[] {
  const lines = input.split('\n');
  return lines.map(parseGame);
}

// only 12 red cubes, 13 green cubes, and 14 blue cubes?

const colorMaximumCountMap: Record<CubeCount['color'], number> = {
  red: 12,
  green: 13,
  blue: 14,
};

export function solvePart1(input: string): number {
  const parsedInput = parseInput(input);

  const validGames = parsedInput.filter(
    (value) =>
      !value.draws.some((draw) =>
        draw.some(
          (cubeCount) =>
            cubeCount.count > colorMaximumCountMap[cubeCount.color],
        ),
      ),
  );

  let sum = 0;
  for (let game of validGames) {
    sum += game.id;
  }

  return sum;
}

function getCubePower(game: Game): number {
  const cubeColorCounts: Record<CubeCount['color'], number> = {
    red: 0,
    blue: 0,
    green: 0,
  };

  for (let draw of game.draws) {
    for (let cubeCount of draw) {
      cubeColorCounts[cubeCount.color] = Math.max(
        cubeColorCounts[cubeCount.color],
        cubeCount.count,
      );
    }
  }

  return cubeColorCounts.blue * cubeColorCounts.green * cubeColorCounts.red;
}

export function solvePart2(input: string): number {
  const games = parseInput(input);

  let sum = 0;
  for (let game of games) {
    sum += getCubePower(game);
  }

  return sum;
}
