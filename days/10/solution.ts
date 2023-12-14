import pointInPolygon from '@turf/boolean-point-in-polygon';
import { point, polygon } from '@turf/helpers';

type PipeType = '|' | '-' | 'L' | 'J' | '7' | 'F' | '.' | 'S';

// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.
// . is ground; there is no pipe in this tile.
// S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.

//   01234X
//  0.....
//  1.S-7.
//  2.|.|.
//  3.L-J.
//  4.....
//  Y

interface MapTile {
  symbol: PipeType;
  x: number;
  y: number;
}

interface MapStructure {
  tiles: MapTile[];
}

function parseLine(input: string, y: number): MapTile[] {
  const symbols = input.trim().split('') as PipeType[];

  return symbols.map((symbol, index) => ({ symbol, x: index, y }));
}

export function parseInput(input: string): MapStructure {
  const lines = input.split(/\n/);

  const tiles = lines.flatMap(parseLine);
  return { tiles };
}

function findAdjacentPipes(currentTile: MapTile, map: MapStructure): MapTile[] {
  return map.tiles.filter(
    (tile) =>
      (tile.x - 1 === currentTile.x && tile.y === currentTile.y) ||
      (tile.x + 1 === currentTile.x && tile.y === currentTile.y) ||
      (tile.x === currentTile.x && tile.y - 1 === currentTile.y) ||
      (tile.x === currentTile.x && tile.y + 1 === currentTile.y),
  );
}

export function canPipesConnect(pipes: [MapTile, MapTile]): boolean {
  if (
    pipes[0].x === pipes[1].x - 1 &&
    ['-', 'F', 'L', 'S'].includes(pipes[0].symbol) &&
    ['-', 'J', '7', 'S'].includes(pipes[1].symbol)
  ) {
    return true;
  }
  if (
    pipes[0].y === pipes[1].y - 1 &&
    ['|', 'F', '7', 'S'].includes(pipes[0].symbol) &&
    ['|', 'J', 'L', 'S'].includes(pipes[1].symbol)
  ) {
    return true;
  }

  if (
    pipes[1].x === pipes[0].x - 1 &&
    ['-', 'F', 'L', 'S'].includes(pipes[1].symbol) &&
    ['-', 'J', '7', 'S'].includes(pipes[0].symbol)
  ) {
    return true;
  }

  if (
    pipes[1].y === pipes[0].y - 1 &&
    ['|', 'F', '7', 'S'].includes(pipes[1].symbol) &&
    ['|', 'J', 'L', 'S'].includes(pipes[0].symbol)
  ) {
    return true;
  }

  return false;
}

export function findPipeline(map: MapStructure): MapTile[] {
  const start = map.tiles.find((value) => value.symbol === 'S');

  if (start === undefined) {
    throw Error('Missing start');
  }

  const connectedPipes: MapTile[] = [];

  const pipesToCheck = [start];

  while (pipesToCheck.length > 0) {
    const currentPipe = pipesToCheck.pop()!;
    connectedPipes.push(currentPipe);

    const adjacentPipes = findAdjacentPipes(currentPipe, map);

    const connectableAdjacentPipes = adjacentPipes.filter((pipe) =>
      canPipesConnect([currentPipe, pipe]),
    );

    const pipesWithExistingIndex = connectableAdjacentPipes.map(
      (pipe) => [connectedPipes.indexOf(pipe), pipe] as const,
    );

    const idx = pipesWithExistingIndex.find((pipe) => pipe[0] !== -1);

    const newPipe = pipesWithExistingIndex.find((pipe) => pipe[0] === -1);

    if (newPipe) {
      if (idx && idx[0] === 0) {
        pipesToCheck.unshift(newPipe[1]);
      } else {
        pipesToCheck.push(newPipe[1]);
      }
    }
  }

  return [...connectedPipes.values()];
}

export function solvePart1(input: string): number {
  const parsedInput = parseInput(input);

  const pipeline = findPipeline(parsedInput);

  return pipeline.length / 2;
}

export function solvePart2(input: string): number {
  const parsedInput = parseInput(input);

  const pipeline = findPipeline(parsedInput);

  const poly = polygon([
    [
      ...pipeline.map((pipe) => [pipe.x * 10, pipe.y * 10]),
      // start and end must be equal
      [pipeline[0].x * 10, pipeline[0].y * 10],
    ],
  ]);

  let count = 0;

  const pipelineTilesSet = new Set(pipeline);

  for (let tile of parsedInput.tiles) {
    if (!pipelineTilesSet.has(tile)) {
      // https://turfjs.org/docs/#booleanPointInPolygon
      if (pointInPolygon(point([tile.x * 10, tile.y * 10]), poly)) {
        count++;
      }
    }
  }

  return count;
}
