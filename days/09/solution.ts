import { parseNumberString } from '../../util/parse';

type SensorHistory = number[];

type SensorReport = SensorHistory[];

export function parseInput(input: string): SensorReport {
  // 0 3 6 9 12 15
  // 1 3 6 10 15 21
  // 10 13 16 21 30 45

  const lines = input.split(/\n/);

  return lines.map(parseNumberString);
}

export function extrapolateNextValue(history: SensorHistory): number {
  if (history.every((value) => value === 0)) {
    return 0;
  }

  const result = [];

  for (let i = 1; i < history.length; i++) {
    const rightValue = history[i];
    const leftValue = history[i - 1];
    result.push(rightValue - leftValue);
  }

  const belowExtrapolatedValue = extrapolateNextValue(result);

  return history.at(-1)! + belowExtrapolatedValue;
}

export function extrapolatePreviousValue(history: SensorHistory): number {
  if (history.every((value) => value === 0)) {
    return 0;
  }

  const result = [];

  for (let i = 1; i < history.length; i++) {
    const rightValue = history[i];
    const leftValue = history[i - 1];
    result.push(rightValue - leftValue);
  }

  const belowExtrapolatedValue = extrapolatePreviousValue(result);

  return history.at(0)! - belowExtrapolatedValue;
}

export function solvePart1(input: string): number {
  const parsedInput = parseInput(input);

  let sum = 0;
  for (let sensorHistory of parsedInput) {
    const nextValue = extrapolateNextValue(sensorHistory);
    sum += nextValue;
  }

  return sum;
}

export function solvePart2(input: string): number {
  const parsedInput = parseInput(input);

  let sum = 0;
  for (let sensorHistory of parsedInput) {
    const nextValue = extrapolatePreviousValue(sensorHistory);
    sum += nextValue;
  }

  return sum;
}
