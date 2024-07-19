interface Coordinate {
  x: number;
  y: number;
}

type StringCoordinate = string;

interface Game {
  currentPoint: StringCoordinate;
  pointNeighbourMapping: Record<StringCoordinate, StringCoordinate[]>;
}

function getStringCoordinate({ x, y }: Coordinate) {
  return `${x};${y}`;
}

export function parseInput(input: string): Game {
  const lines = input.split('\n').map((s) => s.trim());

  const points: Coordinate[] = [];
  let startPoint: StringCoordinate | null = null;

  lines.forEach((line, y) => {
    const chars = line.split('');

    chars.forEach((char, x) => {
      if (char === '#') {
        return;
      }

      const coordinate = { x, y };

      if (char === 'S') {
        startPoint = getStringCoordinate(coordinate);
      }

      points.push(coordinate);
    });
  });

  const pointNeighbourMapping: Game['pointNeighbourMapping'] = {};

  points.forEach((point) => {
    const stringPoint = getStringCoordinate(point);

    const neighbors = points.filter(
      (p) =>
        (point.x === p.x + 1 && point.y === p.y) ||
        (point.x === p.x - 1 && point.y === p.y) ||
        (point.y === p.y + 1 && point.x === p.x) ||
        (point.y === p.y - 1 && point.x === p.x),
    );

    pointNeighbourMapping[stringPoint] = neighbors.map(getStringCoordinate);
  });

  return {
    currentPoint: startPoint!,
    pointNeighbourMapping,
  };
}

function takeQuantumSteps(data: Game, stepsToTake: number) {
  let currentQuantumPositions = [data.currentPoint];

  let quantumStepsTaken = 0;

  while (quantumStepsTaken < stepsToTake) {
    const nextQuantumPositions = new Set<string>();
    currentQuantumPositions.forEach((currentQuantumPosition) => {
      const neighbors = data.pointNeighbourMapping[currentQuantumPosition];
      neighbors.forEach((neighbor) => nextQuantumPositions.add(neighbor));
    });

    currentQuantumPositions = [...nextQuantumPositions];

    quantumStepsTaken++;
  }

  return currentQuantumPositions;
}

export function solvePart1(input: string, stepsToTake = 64) {
  const data = parseInput(input);

  const quantumPositions = takeQuantumSteps(data, stepsToTake);

  return quantumPositions.length;
}

export function solvePart2(input: string) {
  return 0;
}
