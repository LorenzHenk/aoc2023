type GamePulse = 'low' | 'high';

type GameModuleName = string;

type GameModuleFlipFlop = {
  type: 'flip-flop';
  state: boolean;
};

type GameModuleConjunction = {
  type: 'conjunction';
  inputs: Record<GameModuleName, GamePulse>;
};

type GameModuleBroadcaster = {
  type: 'broadcaster';
};

type GameModule = (
  | GameModuleFlipFlop
  | GameModuleConjunction
  | GameModuleBroadcaster
) & {
  outputModules: GameModuleName[];
};

interface Game {
  modules: Record<GameModuleName, GameModule>;
}

function getDefaultModule(type: GameModule['type']): GameModule {
  if (type === 'broadcaster') {
    return { type, outputModules: [] };
  } else if (type === 'conjunction') {
    return {
      type,
      inputs: {},
      outputModules: [],
    };
  } else {
    return { type, outputModules: [], state: false };
  }
}

export function parseLine(line: string): { module: GameModule; name: string } {
  // broadcaster -> a, b, c

  const [left, right] = line.split(' -> ');

  let name = left === 'broadcaster' ? left : left.slice(1);

  const type: GameModule['type'] =
    left[0] === '&'
      ? 'conjunction'
      : left[0] === '%'
        ? 'flip-flop'
        : 'broadcaster';
  const outputs = right.split(', ');

  return {
    module: { ...getDefaultModule(type), outputModules: outputs },
    name,
  };
}

export function parseInput(input: string): Game {
  // broadcaster -> a, b, c
  // %a -> b
  // %b -> c
  // %c -> inv
  // &inv -> a

  const lines = input.split('\n').map((line) => line.trim());

  const modules = lines.map(parseLine);

  modules.forEach((module) => {
    if (module.module.type === 'conjunction') {
      module.module.inputs = Object.fromEntries(
        modules
          .filter((mod) => mod.module.outputModules.includes(module.name))
          .map((mod) => [mod.name, 'low']),
      );
    }
  });

  return {
    modules: Object.fromEntries(
      modules.map((module) => [module.name, module.module]),
    ),
  };
}

function handlePulse(
  pulse: GamePulse,
  module: GameModule,
  sender: GameModuleName,
): Record<GameModuleName, GamePulse> {
  if (module.type === 'broadcaster') {
    return Object.fromEntries(
      module.outputModules.map((module) => [module, pulse]),
    );
  } else if (module.type === 'flip-flop') {
    if (pulse === 'high') {
      return {};
    } else {
      module.state = !module.state;

      return Object.fromEntries(
        module.outputModules.map((mod) => [mod, module.state ? 'high' : 'low']),
      );
    }
  } else {
    module.inputs[sender] = pulse;
    const allHigh = Object.values(module.inputs).every((val) => val === 'high');
    return Object.fromEntries(
      module.outputModules.map((mod) => [mod, allHigh ? 'low' : 'high']),
    );
  }
}

export function solvePart1(input: string) {
  const parsedInput = parseInput(input);

  let pulseCounts: Record<GamePulse, number> = { low: 0, high: 0 };

  let buttonClicks = 0;
  while (buttonClicks < 1000) {
    const taskQueue: Array<{
      pulse: GamePulse;
      receiver: string;
      sender: string;
    }> = [
      {
        pulse: 'low',
        sender: 'button',
        receiver: 'broadcaster',
      },
    ];

    while (taskQueue.length) {
      const task = taskQueue.shift()!;

      pulseCounts[task.pulse]++;

      const module = parsedInput.modules[task.receiver];
      if (!module) {
        continue;
      }

      const nextPulses = handlePulse(task.pulse, module, task.sender);

      taskQueue.push(
        ...Object.entries(nextPulses).map(([module, pulse]) => ({
          pulse,
          receiver: module,
          sender: task.receiver,
        })),
      );
    }

    buttonClicks++;
  }

  return pulseCounts.low * pulseCounts.high;
}

export function solvePart2(input: string) {
  const parsedInput = parseInput(input);

  let pulseCounts: Record<GamePulse, number> = { low: 0, high: 0 };

  let buttonClicks = 0;
  while (true) {
    const taskQueue: Array<{
      pulse: GamePulse;
      receiver: string;
      sender: string;
    }> = [
      {
        pulse: 'low',
        sender: 'button',
        receiver: 'broadcaster',
      },
    ];

    while (taskQueue.length) {
      const task = taskQueue.shift()!;

      pulseCounts[task.pulse]++;

      const module = parsedInput.modules[task.receiver];
      if (!module) {
        continue;
      }

      const nextPulses = handlePulse(task.pulse, module, task.sender);

      if (nextPulses['rx'] === 'low') {
        return buttonClicks + 1;
      }

      taskQueue.push(
        ...Object.entries(nextPulses).map(([module, pulse]) => ({
          pulse,
          receiver: module,
          sender: task.receiver,
        })),
      );
    }

    buttonClicks++;

    if (Number.isInteger(Math.log10(buttonClicks))) {
      console.log(buttonClicks);
    }
  }
}
