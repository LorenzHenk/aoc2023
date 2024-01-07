interface Game {
  columns: Line[];
}

type Character = '#' | '.' | 'O';

type Line = Character[];

export function move(line: Line) {
  for (let index = 0; index < line.length; index++) {
    if (line[index] === 'O') {
      let movingIndex = index - 1;
      for (; movingIndex >= 0 && line[movingIndex] === '.'; movingIndex--) {}
      if (movingIndex < 0) {
        movingIndex = 0;
      } else {
        movingIndex++;
      }

      line[index] = '.';

      line[movingIndex] = 'O';
    }
  }

  return line;
}

export function parseInput(input: string): Game {
  const lines = input.split('\n').map((line) => line.trim().split(''));

  const columns: Line[] = lines[0].map(() => []);

  lines.forEach((line) => {
    line.forEach((character, index) =>
      columns[index].push(character as Character),
    );
  });

  return { columns };
}

export function solvePart1(input: string) {
  const game = parseInput(input);

  game.columns.forEach((column) => move(column));

  let totalLoad = 0;

  console.log(game.columns);

  game.columns.forEach((column) => {
    column
      .map((char, index) => (char === 'O' ? game.columns.length - index : 0))
      .forEach((value) => {
        totalLoad += value;
      });
  });

  return totalLoad;
}

function turnLeft(game: Game): Game {
  const newGame: Game = { columns: game.columns[0].map(() => []) };

  game.columns.forEach((column) => {
    column.forEach((char, index) => {
      newGame.columns[index].push(char);
    });
  });

  return newGame;
}

export function solvePart2(input: string) {
  let game = parseInput(input);

  // TODO improve perf
  for (let i = 0; i < 1000000000; i++) {
    for (let j = 0; j < 4; j++) {
      game.columns.forEach((column) => move(column));
      game = turnLeft(game);
    }
  }

  let totalLoad = 0;

  game.columns.forEach((column) => {
    column
      .map((char, index) => (char === 'O' ? game.columns.length - index : 0))
      .forEach((value) => {
        totalLoad += value;
      });
  });

  return totalLoad;
}
