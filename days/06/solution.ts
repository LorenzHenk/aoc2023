import { parseNumberString } from '../../util/parse';

export type Race = {
  time: number;
  distance: number;
};

export type Game = {
  races: Race[];
};

export function parseInput(
  input: string,
  parseLine: (line: string) => number[],
): Game {
  // Time:      7  15   30
  // Distance:  9  40  200
  const [timeLine, distanceLine] = input.split(/\n/);

  const timeNumbers = parseLine(timeLine);
  const distanceNumbers = parseLine(distanceLine);

  const game: Game = {
    races: [],
  };

  if (timeNumbers.length !== distanceNumbers.length) {
    throw Error('Unexpected input');
  }

  for (let index = 0; index < timeNumbers.length; index++) {
    const time = timeNumbers[index];
    const distance = distanceNumbers[index];

    game.races.push({
      time,
      distance,
    });
  }

  return game;
}

function runRace(race: Race) {
  let winningDistances = [];
  for (let buttonHoldTime = 1; buttonHoldTime < race.time; buttonHoldTime++) {
    const driveTime = race.time - buttonHoldTime;

    const velocity = buttonHoldTime;
    const distance = velocity * driveTime;

    if (distance > race.distance) {
      winningDistances.push(distance);
    }
  }
  return winningDistances;
}

function getResult(game: Game) {
  let result = 1;

  for (let race of game.races) {
    const winningDistances = runRace(race);

    result *= winningDistances.length;
  }

  return result;
}

export function solvePart1(input: string): number {
  const game = parseInput(input, (line) =>
    parseNumberString(line.split(':')[1]),
  );

  return getResult(game);
}

export function solvePart2(input: string): number {
  const game = parseInput(input, (line) => [
    parseInt(line.split(':')[1].replaceAll(' ', '')),
  ]);

  return getResult(game);
}
