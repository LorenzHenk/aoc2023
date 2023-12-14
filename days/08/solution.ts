type NodeName = string;

interface InstructionNode {
  nodeName: NodeName;
  left: NodeName;
  right: NodeName;
}

interface Instructions {
  navigation: Array<'R' | 'L'>;
  nodes: Record<NodeName, InstructionNode>;
}

function parseNodeLine(input: string): InstructionNode {
  // AAA = (BBB, CCC)
  // 0123456789012345
  const nodeName = input.slice(0, 3);
  const leftNodeName = input.slice(7, 10);
  const rightNodeName = input.slice(12, 15);

  return {
    nodeName,
    left: leftNodeName,
    right: rightNodeName,
  };
}

export function parseInput(input: string): Instructions {
  // RL
  //
  // AAA = (BBB, CCC)
  // BBB = (DDD, EEE)
  // CCC = (ZZZ, GGG)
  // DDD = (DDD, DDD)
  // EEE = (EEE, EEE)
  // GGG = (GGG, GGG)
  // ZZZ = (ZZZ, ZZZ)

  const lines = input.split(/\n/);

  const navigationInstructions = lines[0].split(
    '',
  ) as Instructions['navigation'];

  const nodes = lines.slice(2).map((line) => parseNodeLine(line.trim()));

  const nodesMap = nodes.reduce(
    (acc, next) => {
      return { ...acc, [next.nodeName]: next };
    },
    {} as Instructions['nodes'],
  );

  return { navigation: navigationInstructions, nodes: nodesMap };
}

export function solvePart1(input: string): number {
  const instructions = parseInput(input);

  let nextNode = instructions.nodes['AAA'];
  let steps = 0;

  while (nextNode.nodeName !== 'ZZZ') {
    const direction =
      instructions.navigation[steps % instructions.navigation.length];

    const nextNodeName = direction === 'L' ? nextNode.left : nextNode.right;

    nextNode = instructions.nodes[nextNodeName];
    steps++;
  }

  return steps;
}

export function solvePart2(input: string): number {
  const instructions = parseInput(input);

  const startNodes = Object.values(instructions.nodes).filter((node) =>
    node.nodeName.endsWith('A'),
  );

  let nextNodes = startNodes;
  let steps = 0;

  while (nextNodes.some((node) => !node.nodeName.endsWith('Z'))) {
    const direction =
      instructions.navigation[steps % instructions.navigation.length];

    const nextNodeNames = nextNodes.map((node) =>
      direction === 'L' ? node.left : node.right,
    );

    nextNodes = nextNodeNames.map((nodeName) => instructions.nodes[nodeName]);
    steps++;
    if (steps % 1000 === 0) {
      console.log(steps, nextNodes);
    }
  }

  return steps;
}
