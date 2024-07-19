import { parseNumberString } from '../../util/parse';

interface Coordinate3D {
  x: number;
  y: number;
  z: number;
}

interface Brick {
  start: Coordinate3D;
  end: Coordinate3D;
  blocks: Coordinate3D[];
}

interface Game {
  bricksWithBlocks: Brick[];
  allBlocks: Coordinate3D[];
}

function coordinateFromTuple(tuple: number[]): Coordinate3D {
  return {
    x: tuple[0],
    y: tuple[1],
    z: tuple[2],
  };
}

export function generateBlocksBetween(
  start: Coordinate3D,
  end: Coordinate3D,
): Coordinate3D[] {
  const blocks: Coordinate3D[] = [];
  for (let x = start.x; x <= end.x; x++) {
    for (let y = start.y; y <= end.y; y++) {
      for (let z = start.z; z <= end.z; z++) {
        blocks.push({ x, y, z });
      }
    }
  }

  return blocks;
}

export function parseInput(input: string): Game {
  const lines = input.split('\n').map((s) => s.trim());

  const bricks = lines.map((line) =>
    line
      .split('~')
      .map((part) => coordinateFromTuple(parseNumberString(part, ','))),
  );

  const bricksWithBlocks = bricks.map((brickInput) => ({
    start: brickInput[0],
    end: brickInput[1],
    blocks: generateBlocksBetween(brickInput[0], brickInput[1]),
  }));

  return {
    bricksWithBlocks,
    allBlocks: bricksWithBlocks.flatMap((brick) => brick.blocks),
  };
}

function checkCanFall(game: Game, brick: Brick) {
  if (brick.start.z === 1) {
    return false;
  }

  const blocksInBelowLayer = game.allBlocks.filter(
    (block) => block.z === brick.start.z - 1,
  );

  const canFall = !brick.blocks.some((block) =>
    blocksInBelowLayer.some(
      (belowBlock) =>
        block.x === belowBlock.x &&
        block.y === belowBlock.y &&
        block.z === belowBlock.z + 1,
    ),
  );
  return canFall;
}

function simulateFalling(game: Game, brick: Brick) {
  while (checkCanFall(game, brick)) {
    brick.start.z -= 1;
    brick.end.z -= 1;
    brick.blocks.forEach((block) => {
      block.z -= 1;
    });
  }
}

function simulateGravity(game: Game) {
  const bricks = [...game.bricksWithBlocks].sort(
    (a, b) => a.start.z - b.start.z,
  );

  for (let brick of bricks) {
    simulateFalling(game, brick);
  }
}

export function solvePart1(input: string) {
  const data = parseInput(input);

  simulateGravity(data);

  let canPullOut = 0;

  for (let index = 0; index < data.bricksWithBlocks.length; index++) {
    const brickTakenOut = data.bricksWithBlocks[index];
    const allBricksButOne = data.bricksWithBlocks
      .slice(0, index)
      .concat(data.bricksWithBlocks.slice(index + 1));
    const newData: Game = {
      bricksWithBlocks: allBricksButOne,
      allBlocks: allBricksButOne.flatMap((brick) => brick.blocks),
    };

    let anyIsFalling = false;
    for (let brick of newData.bricksWithBlocks) {
      if (brick.start.z < brickTakenOut.end.z) {
        continue;
      }
      if (checkCanFall(newData, brick)) {
        anyIsFalling = true;
        break;
      }
    }

    if (!anyIsFalling) {
      canPullOut++;
    }
  }

  return canPullOut;
}

export function solvePart2(input: string) {
  return 0;
}
