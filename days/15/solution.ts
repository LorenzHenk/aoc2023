type Input = string[];

export function parseInput(input: string): Input {
  const data = input.trim().replaceAll('\n', '').split(',');

  return data;
}

function hashString(data: string) {
  let value = 0;
  for (let char of data) {
    value += char.codePointAt(0)!;
    value = (value * 17) % 256;
  }

  return value;
}

export function solvePart1(input: string): number {
  const parsedInput = parseInput(input);

  let sum = 0;

  for (let data of parsedInput) {
    sum += hashString(data);
  }

  return sum;
}

type StepInstruction =
  | {
      type: 'delete';
    }
  | {
      type: 'add';
      value: number;
    };

interface Step {
  label: string;
  instruction: StepInstruction;
}

interface Lens {
  label: string;
  value: number;
}

interface Box {
  lenses: Lens[];
}

type Boxes = Record<string, Box>;

function parseStep(input: string): Step {
  if (input.endsWith('-')) {
    return {
      label: input.slice(0, -1),
      instruction: {
        type: 'delete',
      },
    };
  } else {
    const [label, valueString] = input.split('=');
    return {
      label,
      instruction: {
        type: 'add',
        value: parseInt(valueString),
      },
    };
  }
}

function parseSteps(input: string): Step[] {
  // rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7

  const stepStrings = input.trim().replaceAll('\n', '').split(',');

  return stepStrings.map(parseStep);
}

export function solvePart2(input: string): number {
  const parsedInput = parseSteps(input);

  const boxes: Boxes = {};

  for (let step of parsedInput) {
    const boxId = hashString(step.label);

    if (!boxes[boxId]) {
      boxes[boxId] = { lenses: [] };
    }
    const box = boxes[boxId];

    if (step.instruction.type === 'delete') {
      box.lenses = box.lenses.filter((lens) => lens.label !== step.label);
    } else {
      const lens = box.lenses.find((lens) => lens.label === step.label);
      if (lens) {
        lens.value = step.instruction.value;
      } else {
        box.lenses.push({
          label: step.label,
          value: step.instruction.value,
        });
      }
    }
  }

  let sum = 0;

  for (let boxData of Object.entries(boxes)) {
    const boxId = parseInt(boxData[0]);
    for (let lensIndex = 0; lensIndex < boxData[1].lenses.length; lensIndex++) {
      const lens = boxData[1].lenses[lensIndex];

      sum += (boxId + 1) * (lensIndex + 1) * lens.value;
    }
  }

  return sum;
}
