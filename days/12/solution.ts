type SpringCondition = 'OPERATIONAL' | 'BROKEN' | 'UNKNOWN';

interface SpringConditionInformation {
  springConditions: SpringCondition[];
  expectedGroups: number[];
}

function mapCondition(character: string): SpringCondition {
  if (character === '.') {
    return 'OPERATIONAL';
  } else if (character === '#') {
    return 'BROKEN';
  } else if (character === '?') {
    return 'UNKNOWN';
  } else {
    throw new Error('unexpected character ' + character);
  }
}

function parseLine(input: string): SpringConditionInformation {
  const [conditionsString, groupsString] = input.trim().split(' ');

  const conditions = conditionsString.split('').map(mapCondition);
  const expectedGroups = groupsString
    .split(',')
    .map((value) => parseInt(value));

  return {
    springConditions: conditions,
    expectedGroups,
  };
}

export function parseInput(input: string): SpringConditionInformation[] {
  // ???.### 1,1,3
  // .??..??...?##. 1,1,3
  // ?#?#?#?#?#?#?#? 1,3,1,6
  // ????.#...#... 4,1,1
  // ????.######..#####. 1,6,5
  // ?###???????? 3,2,1

  const lines = input.split('\n');

  return lines.map(parseLine);
}

function filterPotential(
  conditions: SpringCondition[],
  expectedGroups: number[],
): boolean {
  const groups = buildSpringConditionGroups(conditions);
  if (groups.length > expectedGroups.length) {
    return false;
  }

  for (let index = 0; index < groups.length; index++) {
    if (groups[index] > expectedGroups[index]) {
      return false;
    }
  }

  return true;
}

function buildPossibleSpringConditionsFromUnknown(
  data: SpringCondition[],
  expectedGroups: number[],
): SpringCondition[][] {
  let possibleSpringConditions: SpringCondition[][] = [[]];

  for (let condition of data) {
    if (condition === 'UNKNOWN') {
      const deepCopy = possibleSpringConditions
        .slice()
        .map((value) => [...value]);

      possibleSpringConditions.forEach((possibility) =>
        possibility.push('OPERATIONAL'),
      );
      deepCopy.forEach((possibility) => possibility.push('BROKEN'));

      possibleSpringConditions.push(...deepCopy);
    } else {
      possibleSpringConditions.forEach((possibility) =>
        possibility.push(condition),
      );
    }

    possibleSpringConditions = possibleSpringConditions.filter((config) =>
      filterPotential(config, expectedGroups),
    );
  }

  return possibleSpringConditions;
}

function buildSpringConditionGroups(data: SpringCondition[]): number[] {
  const groups: number[] = [];
  let currentGroupLength = 0;

  for (let condition of data) {
    if (condition === 'BROKEN') {
      currentGroupLength++;
    } else if (condition === 'OPERATIONAL') {
      if (currentGroupLength > 0) {
        groups.push(currentGroupLength);
        currentGroupLength = 0;
      }
    }
  }

  if (currentGroupLength > 0) {
    groups.push(currentGroupLength);
  }

  return groups;
}

export function compareSpringConditionsToExpectedGroups(
  data: SpringConditionInformation,
): boolean {
  const groups = buildSpringConditionGroups(data.springConditions);

  if (groups.length !== data.expectedGroups.length) {
    return false;
  }

  for (let index = 0; index < groups.length; index++) {
    if (groups[index] !== data.expectedGroups[index]) {
      return false;
    }
  }

  return true;
}

export function solvePart1(input: string) {
  const parsedInput = parseInput(input);

  let sum = 0;

  for (let info of parsedInput) {
    const possiblities = buildPossibleSpringConditionsFromUnknown(
      info.springConditions,
      info.expectedGroups,
    );
    const correctConfigurations = possiblities.filter((possiblity) =>
      compareSpringConditionsToExpectedGroups({
        springConditions: possiblity,
        expectedGroups: info.expectedGroups,
      }),
    );

    sum += correctConfigurations.length;
  }

  return sum;
}

export function repeat<T>(a: T, amount: number): T[] {
  return new Array(amount).fill(a);
}

export function joinArrays<T>(data: T[][], glue: T): T[] {
  const result: T[] = [];
  for (let index = 0; index < data.length; index++) {
    result.push(...data[index]);
    if (index !== data.length - 1) {
      result.push(glue);
    }
  }

  return result;
}

function unfold(input: SpringConditionInformation): SpringConditionInformation {
  const iterations = 5;
  return {
    expectedGroups: repeat(input.expectedGroups, iterations).flatMap((a) => a),
    springConditions: joinArrays(
      repeat(input.springConditions, iterations),
      'UNKNOWN',
    ),
  };
}

function countValidSpringConditions(
  data: SpringCondition[],
  expectedGroups: number[],
): number {
  let possibleSpringConditionCount = 0;
  let possibleSpringConditions: SpringCondition[][] = [[]];

  while (possibleSpringConditions.length) {
    const value = possibleSpringConditions.pop()!;

    if (!filterPotential(value, expectedGroups)) {
      continue;
    }

    if (value.length === data.length) {
      if (
        compareSpringConditionsToExpectedGroups({
          expectedGroups,
          springConditions: value,
        })
      ) {
        possibleSpringConditionCount++;
      }
      continue;
    }

    const condition = data[value.length];

    if (condition === 'UNKNOWN') {
      possibleSpringConditions.push([...value, 'BROKEN']);
      possibleSpringConditions.push([...value, 'OPERATIONAL']);
    } else {
      possibleSpringConditions.push([...value, condition]);
    }
  }

  return possibleSpringConditionCount;
}

export function solvePart2(input: string) {
  let parsedInput = parseInput(input);

  parsedInput = parsedInput.map(unfold);

  let sum = 0;

  for (let info of parsedInput) {
    sum += countValidSpringConditions(
      info.springConditions,
      info.expectedGroups,
    );
  }

  return sum;
}
