export function sum(numbers: number[]) {
  let s = 0;
  numbers.forEach((n) => (s += n));

  return s;
}
