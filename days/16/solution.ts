type Field = '.' | '-' | '|' | '/' | '\\';

type Grid = Field[][];

interface LightBeam {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'left' | 'right';
}

export function parseInput(input: string): Grid {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim().split('') as Field[]);

  return lines;
}

function moveBeam(beam: LightBeam) {
  if (beam.direction === 'down') {
    beam.y += 1;
  } else if (beam.direction === 'up') {
    beam.y -= 1;
  } else if (beam.direction === 'left') {
    beam.x -= 1;
  } else {
    beam.x += 1;
  }
}

function reactToField(
  currentField: Field,
  direction: LightBeam['direction'],
): LightBeam['direction'][] {
  if (currentField === '.') {
    return [direction];
  } else if (currentField === '-') {
    if (direction === 'left' || direction === 'right') {
      return [direction];
    } else {
      return ['left', 'right'];
    }
  } else if (currentField === '|') {
    if (direction === 'up' || direction === 'down') {
      return [direction];
    } else {
      return ['up', 'down'];
    }
  } else if (currentField === '/') {
    if (direction === 'right') {
      return ['up'];
    } else if (direction === 'left') {
      return ['down'];
    } else if (direction === 'down') {
      return ['left'];
    } else {
      return ['right'];
    }
  } else {
    if (direction === 'right') {
      return ['down'];
    } else if (direction === 'left') {
      return ['up'];
    } else if (direction === 'down') {
      return ['right'];
    } else {
      return ['left'];
    }
  }
}

function run(grid: Grid, startBeam: LightBeam) {
  const beams: LightBeam[] = [startBeam];

  // format: x,y;direction
  const visitedFieldsWithDirection = new Set<string>();

  while (beams.length) {
    const beam = beams.pop()!;

    moveBeam(beam);

    // check if we've already been here

    const key = `${beam.x},${beam.y};${beam.direction}`;

    if (
      visitedFieldsWithDirection.has(key) ||
      beam.x < 0 ||
      beam.y < 0 ||
      beam.x >= grid[0].length ||
      beam.y >= grid.length
    ) {
      continue;
    }

    visitedFieldsWithDirection.add(key);

    const currentField = grid[beam.y][beam.x];

    const newBeamDirections = reactToField(currentField, beam.direction);

    const newBeams = newBeamDirections.map((direction) => ({
      ...beam,
      direction,
    }));

    beams.push(...newBeams);
  }

  // format: x,y
  const energizedFields = new Set(
    [...visitedFieldsWithDirection.values()].map(
      (field) => field.split(';')[0],
    ),
  );

  return energizedFields.size;
}

export function solvePart1(input: string) {
  const grid = parseInput(input);

  return run(grid, { x: -1, y: 0, direction: 'right' });
}

export function solvePart2(input: string) {
  const grid = parseInput(input);

  let maxEnergy = 0;

  for (let x = 0; x < grid[0].length; x++) {
    const run1 = run(grid, { x, y: -1, direction: 'down' });
    const run2 = run(grid, { x, y: grid.length, direction: 'up' });
    maxEnergy = Math.max(maxEnergy, run1, run2);
  }

  for (let y = 0; y < grid.length; y++) {
    maxEnergy = Math.max(
      maxEnergy,
      run(grid, { y, x: -1, direction: 'right' }),
      run(grid, { y, x: grid[0].length, direction: 'left' }),
    );
  }

  return maxEnergy;
}
