/**
 *
 * @example
 * parseNumberString('1 2 3') // [1, 2, 3]
 */
export function parseNumberString(input: string, delimiter = ' '): number[] {
  return input
    .trim()
    .split(new RegExp(delimiter + ' *'))
    .map((value) => parseInt(value));
}
