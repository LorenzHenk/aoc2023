const cardFaces = [
  'A',
  'K',
  'Q',
  'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
] as const;

export type Card = (typeof cardFaces)[number];

export type Hand = {
  cards: Card[];
  bid: number;
};

export type Game = {
  hands: Hand[];
};

export function parseLine(input: string): Hand {
  // 32T3K 765

  const [cardString, bidString] = input.trim().split(' ');

  return { bid: parseInt(bidString), cards: cardString.split('') as Card[] };
}

export function parseInput(input: string): Game {
  //   32T3K 765
  // T55J5 684
  // KK677 28
  // KTJJT 220
  // QQQJA 483

  const lines = input.split(/\n/);

  const game: Game = {
    hands: lines.map(parseLine),
  };

  return game;
}

const handsTypes = [
  'Five of a kind', // where all five cards have the same label: AAAAA
  'Four of a kind', // where four cards have the same label and one card has a different label: AA8AA
  'Full house', // where three cards have the same label, and the remaining two cards share a different label: 23332
  'Three of a kind', // where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98
  'Two pair', // where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432
  'One pair', // where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4
  'High card', // where all cards' labels are distinct: 23456
] as const;

type HandsType = (typeof handsTypes)[number];

export function getHandValue(hand: Hand): HandsType {
  const counts = hand.cards.reduce(
    (acc, next) => {
      const existingCount = acc.find((value) => value.symbol === next);

      if (existingCount !== undefined) {
        existingCount.count += 1;
      } else {
        acc.push({ count: 1, symbol: next });
      }

      return acc;
    },
    [] as { count: number; symbol: Card }[],
  );

  if (counts.length === 1) {
    return 'Five of a kind';
  } else if (counts.some((countInfo) => countInfo.count === 4)) {
    return 'Four of a kind';
  } else if (
    counts.some((countInfo) => countInfo.count === 3) &&
    counts.some((countInfo) => countInfo.count === 2)
  ) {
    return 'Full house';
  } else if (counts.some((countInfo) => countInfo.count === 3)) {
    return 'Three of a kind';
  } else if (counts.filter((countInfo) => countInfo.count === 2).length === 2) {
    return 'Two pair';
  } else if (counts.some((countInfo) => countInfo.count === 2)) {
    return 'One pair';
  } else {
    return 'High card';
  }
}

export function solvePart1(input: string): number {
  const game = parseInput(input);

  const handsWithValues = game.hands.map((hand) => ({
    hand,
    value: getHandValue(hand),
  }));

  handsWithValues
    .sort((a, b) => {
      const aValue = handsTypes.indexOf(a.value);
      const bValue = handsTypes.indexOf(b.value);

      if (aValue === bValue) {
        for (let index = 0; index < 5; index++) {
          const aCard = a.hand.cards[index];
          const bCard = b.hand.cards[index];

          if (aCard !== bCard) {
            return cardFaces.indexOf(aCard) - cardFaces.indexOf(bCard);
          }
        }
      }

      return aValue - bValue;
    })
    .reverse();

  let result = 0;

  for (let index = 0; index < handsWithValues.length; index++) {
    result += handsWithValues[index].hand.bid * (index + 1);
  }

  return result;
}

const cardFacesWithJoker = [
  'A',
  'K',
  'Q',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  'J',
] as const;

export function getHandValueWithJoker(hand: Hand): HandsType {
  const counts = hand.cards.reduce(
    (acc, next) => {
      const existingCount = acc.find((value) => value.symbol === next);

      if (existingCount !== undefined) {
        existingCount.count += 1;
      } else {
        acc.push({ count: 1, symbol: next });
      }

      return acc;
    },
    [] as { count: number; symbol: Card }[],
  );

  if (hand.cards.includes('J')) {
    const jokerCount = counts.find((countInfo) => countInfo.symbol === 'J')!;

    const maxCount = Math.max(
      ...counts
        .filter((countInfo) => countInfo.symbol !== 'J')
        .map((countInfo) => countInfo.count),
    );

    const maxCountCardInfo = counts.find(
      (countInfo) => countInfo.symbol !== 'J' && countInfo.count === maxCount,
    );

    if (maxCountCardInfo) {
      maxCountCardInfo.count += jokerCount.count;
      counts.splice(
        counts.findIndex((countInfo) => countInfo.symbol === 'J')!,
        1,
      );
    }
  }

  if (counts.some((countInfo) => countInfo.count === 5)) {
    return 'Five of a kind';
  } else if (counts.some((countInfo) => countInfo.count === 4)) {
    return 'Four of a kind';
  } else if (
    counts.some((countInfo) => countInfo.count === 3) &&
    counts.some((countInfo) => countInfo.count === 2)
  ) {
    return 'Full house';
  } else if (counts.some((countInfo) => countInfo.count === 3)) {
    return 'Three of a kind';
  } else if (counts.filter((countInfo) => countInfo.count === 2).length === 2) {
    return 'Two pair';
  } else if (counts.some((countInfo) => countInfo.count === 2)) {
    return 'One pair';
  } else {
    return 'High card';
  }
}

export function solvePart2(input: string): number {
  const game = parseInput(input);

  const handsWithValues = game.hands.map((hand) => ({
    hand,
    value: getHandValueWithJoker(hand),
  }));

  handsWithValues
    .sort((a, b) => {
      const aValue = handsTypes.indexOf(a.value);
      const bValue = handsTypes.indexOf(b.value);

      if (aValue === bValue) {
        for (let index = 0; index < 5; index++) {
          const aCard = a.hand.cards[index];
          const bCard = b.hand.cards[index];

          if (aCard !== bCard) {
            return (
              cardFacesWithJoker.indexOf(aCard) -
              cardFacesWithJoker.indexOf(bCard)
            );
          }
        }
      }

      return aValue - bValue;
    })
    .reverse();

  let result = 0;

  for (let index = 0; index < handsWithValues.length; index++) {
    result += handsWithValues[index].hand.bid * (index + 1);
  }

  return result;
}
