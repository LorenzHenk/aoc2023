import { parseNumberString } from '../../util/parse';

interface Card {
  id: number;
  winningNumbers: number[];
  actualNumbers: number[];
}

export function parseLine(input: string): Card {
  // Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53

  const [, id, winningNumbersString, actualNumbersString] = input.match(
    /^Card +(\d+): ([\d ]+) +\| +([\d ]+)$/,
  ) as RegExpMatchArray;

  return {
    id: parseInt(id),
    winningNumbers: parseNumberString(winningNumbersString),
    actualNumbers: parseNumberString(actualNumbersString),
  };
}

export function parseInput(input: string) {
  const lines = input.split('\n');

  return lines.map(parseLine);
}

function getActualWinningNumbers(card: Card) {
  return card.actualNumbers.filter((num) => card.winningNumbers.includes(num));
}

export function solvePart1(input: string): number {
  const cards = parseInput(input);

  let sum = 0;

  for (let card of cards) {
    const actualWinningNumbers = getActualWinningNumbers(card);

    if (actualWinningNumbers.length) {
      sum += 2 ** (actualWinningNumbers.length - 1);
    }
  }

  return sum;
}

export function solvePart2(input: string): number {
  const cards = parseInput(input);

  const cardCopyCountByCardId: Record<number, number> = {};

  for (let card of cards) {
    const actualWinningNumbers = getActualWinningNumbers(card);

    const copyCount = cardCopyCountByCardId[card.id] ?? 0;

    for (let index = 1; index <= actualWinningNumbers.length; index++) {
      const nextCardIndex = card.id + index;
      const copyCountForNextCard = cardCopyCountByCardId[nextCardIndex] ?? 0;
      cardCopyCountByCardId[nextCardIndex] =
        copyCountForNextCard + (1 + copyCount);
    }
  }

  let totalCopyCount = 0;

  for (let cardCopyCount of Object.values(cardCopyCountByCardId)) {
    totalCopyCount += cardCopyCount;
  }

  return cards.length + totalCopyCount;
}
