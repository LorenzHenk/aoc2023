interface Instruction {
  direction: 'R' | 'L' | 'U' | 'D';
  distance: number;
}

interface Game {
  instructions: Instruction[];
}

interface Hole {
  x: number;
  y: number;
}

function parseLine(input: string): Instruction {
  // R 6 (#70c710)

  const [direction, distanceString, _color] = input.trim().split(' ');

  return {
    direction: direction as Instruction['direction'],
    distance: parseInt(distanceString),
  };
}

export function parseInput(input: string): Game {
  const instructions = input.split('\n').map(parseLine);

  return { instructions };
}

export function followInstructions(data: Game): Hole[] {
  const holes: Hole[] = [
    {
      x: 0,
      y: 0,
    },
  ];

  for (let instruction of data.instructions) {
    const currentLocation = holes.at(-1)!;
    for (let d = 1; d <= instruction.distance; d++) {
      const nextLocation = { ...currentLocation };
      if (instruction.direction === 'D') {
        nextLocation.y += d;
      } else if (instruction.direction === 'L') {
        nextLocation.x -= d;
      } else if (instruction.direction === 'R') {
        nextLocation.x += d;
      } else if (instruction.direction === 'U') {
        nextLocation.y -= d;
      }
      holes.push(nextLocation);
    }
  }

  return holes;
}

export function followInstructionsToCorners(data: Game): Hole[] {
  const holes: Hole[] = [
    {
      x: 0,
      y: 0,
    },
  ];

  for (let instruction of data.instructions) {
    const currentLocation = holes.at(-1)!;
    const nextLocation = { ...currentLocation };
    if (instruction.direction === 'D') {
      nextLocation.y += instruction.distance;
    } else if (instruction.direction === 'L') {
      nextLocation.x -= instruction.distance;
    } else if (instruction.direction === 'R') {
      nextLocation.x += instruction.distance;
    } else if (instruction.direction === 'U') {
      nextLocation.y -= instruction.distance;
    }
    holes.push(nextLocation);
  }

  return holes;
}

function getHoleIdentifier(hole: Hole): string {
  return `${hole.x};${hole.y}`;
}

function min(values: number[]): number {
  let minValue = values[0];
  for (let value of values) {
    if (value < minValue) {
      minValue = value;
    }
  }
  return minValue;
}

function max(values: number[]): number {
  let maxValue = values[0];
  for (let value of values) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
}

function excavate(surroundingHoles: Hole[]): number {
  const values = surroundingHoles.map((hole) => hole.y);
  const topBorder = min(values);
  const bottomBorder = max(values);

  const holes = new Set(
    surroundingHoles.map((hole) => getHoleIdentifier(hole)),
  );

  const holesGroupedByY = surroundingHoles.reduce((acc, next) => {
    if (acc.has(next.y)) {
      acc.get(next.y)!.push(next.x);
    } else {
      acc.set(next.y, [next.x]);
    }

    return acc;
  }, new Map<number, number[]>());

  let beginning: { x: number; y: number } | null = null;

  for (let y = topBorder + 1; y < bottomBorder; y++) {
    const x = min(holesGroupedByY.get(y)!);

    if (!holes.has(getHoleIdentifier({ x: x + 1, y }))) {
      beginning = { x: x + 1, y };
      break;
    }
  }

  if (!beginning) {
    throw new Error("Didn't work out as expected");
  }

  const holesToDig = [beginning];

  while (holesToDig.length) {
    const holeToDig = holesToDig.shift()!;

    if (holes.has(getHoleIdentifier(holeToDig))) {
      continue;
    }

    holesToDig.unshift(
      ...[
        { ...holeToDig, x: holeToDig.x - 1 },
        { ...holeToDig, x: holeToDig.x + 1 },
        { ...holeToDig, y: holeToDig.y - 1 },
        { ...holeToDig, y: holeToDig.y + 1 },
      ].filter((hole) => !holes.has(getHoleIdentifier(hole))),
    );

    holes.add(getHoleIdentifier(holeToDig));
  }

  // total amount of holes
  return holes.size;
}

export function solvePart1Old(input: string) {
  const data = parseInput(input);

  const surroundingHoles = followInstructions(data);

  const amount = excavate(surroundingHoles);

  return amount;
}

export function shoelaceArea(points: Hole[]): number {
  let area = 0;

  for (let i = 1; i < points.length; i++) {
    const p1 = points[i - 1];
    const p2 = points[i];

    area += p1.x * p2.y - p1.y * p2.x;
  }

  return Math.abs(area) / 2;
}

export function solvePart1(input: string) {
  const data = parseInput(input);

  const corners = followInstructionsToCorners(data);

  const holes = followInstructions(data);

  const area = shoelaceArea(corners);

  return area + Math.floor(holes.length / 2) + 1;
}

function getDirectionFromDigit(digit: string): Instruction['direction'] {
  if (digit === '0') {
    return 'R';
  } else if (digit === '1') {
    return 'D';
  } else if (digit === '2') {
    return 'L';
  } else {
    return 'U';
  }
}

function parseLineColorWhichWasNotAColorForFsSake(input: string): Instruction {
  // R 6 (#70c710)

  const color = input.trim().split(' ').at(-1)!;

  const distanceHex = color.slice(2, 7);

  const directionDigit = color.at(-2)!;

  return {
    direction: getDirectionFromDigit(directionDigit),
    distance: Number('0x' + distanceHex),
  };
}

function parseInputColorWhichWasNotAColorForFsSake(input: string): Game {
  const instructions = input
    .split('\n')
    .map(parseLineColorWhichWasNotAColorForFsSake);

  return { instructions };
}

export function solvePart2Old(input: string) {
  const data = parseInputColorWhichWasNotAColorForFsSake(input);

  const surroundingHoles = followInstructions(data);

  const amount = excavate(surroundingHoles);

  return amount;
}

export function solvePart2(input: string) {
  const data = parseInputColorWhichWasNotAColorForFsSake(input);

  const corners = followInstructionsToCorners(data);

  const circumference = data.instructions.reduce((acc, next) => {
    return acc + next.distance;
  }, 0);

  const area = shoelaceArea(corners);

  // https://en.wikipedia.org/wiki/Shoelace_formula
  // https://en.wikipedia.org/wiki/Pick%27s_theorem
  // A = i + b/2 - 1
  // i = A - b/2 + 1
  // + b
  // i + b = A + b/2 + 1
  return area + Math.floor(circumference / 2) + 1;
}
