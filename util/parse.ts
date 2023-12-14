/**
 *
 * @example
 * parseNumberString('1 2 3') // [1, 2, 3]
 */
export function parseNumberString(input: string): number[] {
  return input
    .trim()
    .split(/ +/)
    .map((value) => parseInt(value));
}
