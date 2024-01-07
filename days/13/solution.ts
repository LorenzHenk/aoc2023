interface Field {
  rows: string[];
  columns: string[];
}

export function parseField(input: string): Field {
  const rows = input
    .trim()
    .split('\n')
    .map((line) => line.trim());

  const lineLength = rows[0].length;

  const columns = [];

  for (let x = 0; x < lineLength; x++) {
    columns.push(rows.map((row) => row[x]).join(''));
  }

  return { rows, columns };
}

export function parseInput(input: string): Field[] {
  const blockStrings = input.split(/\n\s*\n/);

  return blockStrings.map(parseField);
}

function findMirrorIndex(data: string[]): number | null {
  const totalLength = data.length;
  for (let index = 0; index < totalLength; index++) {
    const row = data[index];
    if (row === data[index + 1]) {
      let delta = 1;

      let isMirrored = true;

      while (index - delta >= 0 && index + 1 + delta < totalLength) {
        const left = data[index - delta];
        const right = data[index + 1 + delta];

        if (left !== right) {
          isMirrored = false;
          break;
        }

        delta++;
      }

      if (isMirrored) {
        return index + 1;
      }
    }
  }
  return null;
}

function compareLines(a: string, b: string): number {
  let differenceCount = 0;

  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      differenceCount++;
    }
  }

  return differenceCount;
}

function findMirrorIndexWithSmudge(data: string[]): number | null {
  const totalLength = data.length;
  for (let index = 0; index < totalLength - 1; index++) {
    const row = data[index];

    const initialLineErrorCount = compareLines(row, data[index + 1]);

    if (initialLineErrorCount > 1) {
      continue;
    }

    let errorCount = initialLineErrorCount;

    let delta = 1;

    let isMirrored = true;

    while (index - delta >= 0 && index + 1 + delta < totalLength) {
      const left = data[index - delta];
      const right = data[index + 1 + delta];

      errorCount += compareLines(left, right);

      if (errorCount > 1) {
        isMirrored = false;
        break;
      }

      delta++;
    }

    if (errorCount !== 1) {
      continue;
    }

    if (isMirrored) {
      return index + 1;
    }
  }
  return null;
}

function findFieldMirror(
  field: Field,
  solver: (data: string[]) => number | null,
  index: number,
): {
  direction: 'horizontal' | 'vertical';
  position: number;
} {
  const rowsMirror = solver(field.rows);
  const columnsMirror = solver(field.columns);

  if (rowsMirror !== null) {
    return { direction: 'horizontal', position: rowsMirror };
  }

  if (columnsMirror !== null) {
    return { direction: 'vertical', position: columnsMirror };
  }

  throw new Error("Couldn't find mirror at " + index);
}

export function solvePart1(input: string) {
  const fields = parseInput(input);

  const mirrorPositions = fields.map((field, index) =>
    findFieldMirror(field, findMirrorIndex, index),
  );

  let sum = 0;

  for (let mirrorPosition of mirrorPositions) {
    if (mirrorPosition.direction === 'horizontal') {
      sum += 100 * mirrorPosition.position;
    } else {
      sum += mirrorPosition.position;
    }
  }

  return sum;
}

export function solvePart2(input: string) {
  const fields = parseInput(input);

  const mirrorPositions = fields.map((field, index) =>
    findFieldMirror(field, findMirrorIndexWithSmudge, index),
  );

  let sum = 0;

  for (let mirrorPosition of mirrorPositions) {
    if (mirrorPosition.direction === 'horizontal') {
      sum += 100 * mirrorPosition.position;
    } else {
      sum += mirrorPosition.position;
    }
  }

  return sum;
}
