type GearMapNumber = {
  value: number;
  xStart: number;
  xEnd: number;
  y: number;
};

type GearMapSymbol = {
  value: string;
  x: number;
  y: number;
};

type GearMap = {
  numbers: GearMapNumber[];
  symbols: GearMapSymbol[];
};

export function parseLine(line: string, y: number): GearMap {
  const result: GearMap = {
    numbers: [],
    symbols: [],
  };

  const trimmedLine = line.trim();

  let xStart: number | null = null;
  for (let index = 0; index < trimmedLine.length; index++) {
    const character = trimmedLine[index];

    if (/\d/.test(character)) {
      if (xStart === null) {
        xStart = index;
      }
    } else if (character === '.') {
      if (xStart !== null) {
        result.numbers.push({
          xStart: xStart,
          xEnd: index - 1,
          y: y,
          value: parseInt(trimmedLine.slice(xStart, index)),
        });

        xStart = null;
      }
    } else {
      if (xStart !== null) {
        result.numbers.push({
          xStart: xStart,
          xEnd: index - 1,
          y: y,
          value: parseInt(trimmedLine.slice(xStart, index)),
        });

        xStart = null;
      }

      result.symbols.push({
        value: character,
        x: index,
        y: y,
      });
    }
  }

  if (xStart !== null) {
    result.numbers.push({
      xStart: xStart,
      xEnd: trimmedLine.length - 1,
      y: y,
      value: parseInt(trimmedLine.slice(xStart, trimmedLine.length)),
    });
  }

  return result;
}

function parseInput(input: string): GearMap {
  const result: GearMap = {
    numbers: [],
    symbols: [],
  };

  input.split('\n').forEach((value, index) => {
    const lineResult = parseLine(value, index);
    result.numbers.push(...lineResult.numbers);
    result.symbols.push(...lineResult.symbols);
  });

  return result;
}

function findSymbolAtCoordinate(gearMap: GearMap, x: number, y: number) {
  return gearMap.symbols.find((symbol) => symbol.x === x && symbol.y === y);
}

function findSymbolsNextToNumber(
  gearMap: GearMap,
  gearMapNumber: GearMapNumber,
): GearMapSymbol[] {
  const symbols: GearMapSymbol[] = [];

  for (
    let index = gearMapNumber.xStart - 1;
    index <= gearMapNumber.xEnd + 1;
    index++
  ) {
    const symbol = findSymbolAtCoordinate(gearMap, index, gearMapNumber.y - 1);
    if (symbol) {
      symbols.push(symbol);
    }
  }

  const symbolLeftOfNumber = findSymbolAtCoordinate(
    gearMap,
    gearMapNumber.xStart - 1,
    gearMapNumber.y,
  );

  if (symbolLeftOfNumber) {
    symbols.push(symbolLeftOfNumber);
  }
  const symbolRightOfNumber = findSymbolAtCoordinate(
    gearMap,
    gearMapNumber.xEnd + 1,
    gearMapNumber.y,
  );

  if (symbolRightOfNumber) {
    symbols.push(symbolRightOfNumber);
  }

  for (
    let index = gearMapNumber.xStart - 1;
    index <= gearMapNumber.xEnd + 1;
    index++
  ) {
    const symbol = findSymbolAtCoordinate(gearMap, index, gearMapNumber.y + 1);
    if (symbol) {
      symbols.push(symbol);
    }
  }

  return symbols;
}

function filterGearMap(gearMap: GearMap): GearMapNumber[] {
  const result: GearMapNumber[] = [];

  for (let gearMapNumber of gearMap.numbers) {
    const symbolsNextToNumber = findSymbolsNextToNumber(gearMap, gearMapNumber);
    if (symbolsNextToNumber.length) {
      result.push(gearMapNumber);
    }
  }

  return result;
}

export function solvePart1(input: string): number {
  const parsedInput = parseInput(input);

  const filteredNumbers = filterGearMap(parsedInput);

  let sum = 0;
  for (let gearMapNumber of filteredNumbers) {
    sum += gearMapNumber.value;
  }

  return sum;
}

export function solvePart2(input: string): number {
  const gearMap = parseInput(input);

  gearMap.symbols = gearMap.symbols.filter((value) => value.value === '*');

  const symbolToNumberMap = new Map<GearMapSymbol, GearMapNumber[]>();

  for (let gearMapNumber of gearMap.numbers) {
    const symbols = findSymbolsNextToNumber(gearMap, gearMapNumber);

    for (let symbol of symbols) {
      const currentSymbolNumbers = symbolToNumberMap.get(symbol);
      if (currentSymbolNumbers === undefined) {
        symbolToNumberMap.set(symbol, [gearMapNumber]);
      } else {
        currentSymbolNumbers.push(gearMapNumber);
      }
    }
  }

  let sum = 0;
  for (let gearMapNumbers of symbolToNumberMap.values()) {
    if (gearMapNumbers.length === 2) {
      sum += gearMapNumbers[0].value * gearMapNumbers[1].value;
    }
  }

  return sum;
}
