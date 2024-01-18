interface Tile {
  x: number;
  y: number;
  value: number;
}

interface CityMap {
  tiles: Record<string, Tile>;
  endCoordinate: { x: number; y: number };
}

interface Movement {
  x: number;
  y: number;
  totalValue: number;
  direction: 'left' | 'up' | 'down' | 'right';
  consecutiveDirectionMovementCount: number;
}

function getKey({ x, y }: { x: number; y: number }) {
  return `${x};${y}`;
}

function getKeyVisited({
  x,
  y,
  direction,
  consecutiveDirectionMovementCount,
}: Movement) {
  return `${x};${y};${direction};${consecutiveDirectionMovementCount}`;
}

export function parseInput(input: string): CityMap {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim());

  const tiles: CityMap['tiles'] = {};

  lines.forEach((line, y) => {
    line.split('').forEach((valueString, x) => {
      tiles[getKey({ x, y })] = { x, y, value: parseInt(valueString) };
    });
  });

  return {
    tiles,
    endCoordinate: {
      y: lines.length - 1,
      x: lines[0].length - 1,
    },
  };
}

function get90DegreeTurnDirection(
  direction: Movement['direction'],
): [Movement['direction'], Movement['direction']] {
  if (direction === 'left' || direction === 'right') {
    return ['up', 'down'];
  } else {
    return ['left', 'right'];
  }
}

const directionMovement = {
  left: {
    x: -1,
    y: 0,
  },
  up: {
    x: 0,
    y: -1,
  },
  right: {
    x: 1,
    y: 0,
  },
  down: {
    x: 0,
    y: 1,
  },
} as const;

function getValidNextMovements(
  currentMovement: Movement,
  tiles: CityMap['tiles'],
): Movement[] {
  const allowedDirections = get90DegreeTurnDirection(currentMovement.direction);

  if (currentMovement.consecutiveDirectionMovementCount < 3) {
    allowedDirections.push(currentMovement.direction);
  }

  return allowedDirections
    .map((direction): Movement | null => {
      const directionalMovement = directionMovement[direction];

      const newPosition = {
        x: currentMovement.x + directionalMovement.x,
        y: currentMovement.y + directionalMovement.y,
      };

      const tileAtPosition = tiles[getKey(newPosition)];

      if (tileAtPosition === undefined) {
        // out of bounds
        return null;
      }

      const consecutiveDirectionMovementCount =
        currentMovement.direction === direction
          ? currentMovement.consecutiveDirectionMovementCount + 1
          : 1;

      return {
        consecutiveDirectionMovementCount,
        direction,
        totalValue: currentMovement.totalValue + tileAtPosition.value,
        ...newPosition,
      };
    })
    .filter((value): value is Movement => value !== null);
}

export function solvePart1(input: string) {
  const { endCoordinate, tiles } = parseInput(input);

  const currentMovements: Movement[] = [
    {
      x: 0,
      y: 0,
      direction: 'right',
      consecutiveDirectionMovementCount: 0,
      totalValue: 0,
    },
  ];
  let bestFinishedMovement: Movement | null = null;

  let visitedTiles = new Map<
    string,
    {
      totalValue: number;
      direction: Movement['direction'];
      consecutiveDirectionMovementCount: number;
    }
  >();

  let count = 0;
  while (currentMovements.length) {
    const currentMovement = currentMovements.shift()!;

    visitedTiles.set(getKeyVisited(currentMovement), {
      totalValue: currentMovement.totalValue,
      direction: currentMovement.direction,
      consecutiveDirectionMovementCount:
        currentMovement.consecutiveDirectionMovementCount,
    });

    // reaching the end
    if (
      currentMovement.x === endCoordinate.x &&
      currentMovement.y === endCoordinate.y
    ) {
      bestFinishedMovement = currentMovement;
      break;
    }

    const nextMovements = getValidNextMovements(currentMovement, tiles);

    nextMovements
      .filter((movement) => !visitedTiles.has(getKeyVisited(movement)))
      .forEach((movement) => {
        const index = currentMovements.findIndex(
          (value) =>
            value.totalValue > movement.totalValue ||
            value.totalValue === movement.totalValue,
        );

        if (
          movement.x === currentMovements[index]?.x &&
          movement.y === currentMovements[index]?.y &&
          movement.direction === currentMovements[index]?.direction &&
          movement.totalValue === currentMovements[index]?.totalValue &&
          movement.consecutiveDirectionMovementCount ===
            currentMovements[index]?.consecutiveDirectionMovementCount
        ) {
          return;
        }

        currentMovements.splice(
          index === -1 ? currentMovements.length : index,
          0,
          movement,
        );
      });

    count++;

    if (Math.log10(count) % 0.2 < 0.001) {
      console.log(count, currentMovements.length, visitedTiles.size, [
        currentMovements[0],
        currentMovements.slice(-1)[0],
      ]);
    }
  }

  console.log(count, currentMovements.length, visitedTiles.size, [
    currentMovements[0],
    currentMovements.slice(-1)[0],
  ]);
  return bestFinishedMovement?.totalValue;
}

export function solvePart2(input: string) {
  return 0;
}
