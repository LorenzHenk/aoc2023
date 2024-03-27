import { sum } from '../../util/sum';

interface WorkflowRule {
  property: keyof Part;
  operator: '<' | '>';
  value: number;
  resultLabel: string;
}

interface Workflow {
  label: string;
  rules: WorkflowRule[];
  fallbackLabel: string;
}

interface Part {
  x: number;
  m: number;
  a: number;
  s: number;
}

interface Game {
  workflows: Record<string, Workflow>;
  parts: Part[];
}

function parseWorkflow(line: string): Workflow {
  // hdj{m>838:A,pv}

  const label = line.trim().split('{')[0];
  const fallbackLabel = line.trim().split(',').at(-1)!.slice(0, -1);

  const rulesMatches = [...line.trim().matchAll(/(\w+)([<>])(\d+):(\w+)/g)];

  const rules = rulesMatches.map(
    (rule): WorkflowRule => ({
      property: rule[1] as keyof Part,
      operator: rule[2] as WorkflowRule['operator'],
      value: parseInt(rule[3]),
      resultLabel: rule[4],
    }),
  );

  return { label, fallbackLabel, rules };
}

function parseParts(line: string): Part {
  // {x=787,m=2655,a=1222,s=2876}
  const matches = [...line.trim().matchAll(/(\w)=(\d+)/g)];

  return matches.reduce((acc, next) => {
    return { ...acc, [next[1]]: parseInt(next[2]) };
  }, {} as Part);
}

export function parseInput(input: string): Game {
  const [workflowsString, partsString] = input.split('\n\n');
  const workflows = workflowsString
    .trim()
    .split('\n')
    .map((line) => parseWorkflow(line));

  const workflowLookup = workflows.reduce(
    (acc, next) => {
      return { ...acc, [next.label]: next };
    },
    {} as Record<string, Workflow>,
  );

  const parts = partsString
    .trim()
    .split('\n')
    .map((line) => parseParts(line));

  return { workflows: workflowLookup, parts };
}

function ruleCorrect(rule: WorkflowRule, part: Part): boolean {
  if (rule.operator === '<' && part[rule.property] < rule.value) {
    return true;
  } else if (rule.operator === '>' && part[rule.property] > rule.value) {
    return true;
  }
  return false;
}

function runWorkflow(part: Part, workflows: Game['workflows']): 'A' | 'R' {
  let currentWorkflowLabel = 'in';

  while (currentWorkflowLabel !== 'A' && currentWorkflowLabel !== 'R') {
    const currentWorkflow = workflows[currentWorkflowLabel];
    let ruleFound = false;
    for (let rule of currentWorkflow.rules) {
      if (ruleCorrect(rule, part)) {
        currentWorkflowLabel = rule.resultLabel;
        ruleFound = true;
        break;
      }
    }
    if (!ruleFound) {
      currentWorkflowLabel = currentWorkflow.fallbackLabel;
    }
  }

  return currentWorkflowLabel;
}

export function solvePart1(input: string) {
  const parsedInput = parseInput(input);

  let result = 0;

  for (let part of parsedInput.parts) {
    const workflowResult = runWorkflow(part, parsedInput.workflows);
    if (workflowResult === 'A') {
      result += part.x + part.m + part.a + part.s;
    }
  }

  return result;
}

interface FinishedWorkflowReverseEngineeringFlow {
  accumulatedRuleSet: WorkflowReverseEngineeringFlow['accumulatedRuleSet'];
}

interface WorkflowReverseEngineeringFlow {
  currentWorkflowLabel: string;
  accumulatedRuleSet: Partial<
    Record<keyof Part, { greaterThan?: number; lessThan?: number }>
  >;
  currentLocation: 'fallback' | number;
}

function countPossibleParts(workflows: Game['workflows']): number {
  const finishedWorkflowReverseEngineeringFlows: FinishedWorkflowReverseEngineeringFlow[] =
    [];
  const currentWorkflowReverseEngineeringFlows: WorkflowReverseEngineeringFlow[] =
    [];

  const workflowsWithFallbackLabelA = Object.values(workflows)
    .filter((workflow) => workflow.fallbackLabel === 'A')
    .map(
      (workflow): WorkflowReverseEngineeringFlow => ({
        accumulatedRuleSet: {},
        currentLocation: 'fallback',
        currentWorkflowLabel: workflow.label,
      }),
    );

  const workflowsWithRuleResultLabelA = Object.values(workflows)
    .filter((workflow) =>
      workflow.rules.some((rule) => rule.resultLabel === 'A'),
    )
    .flatMap(
      (workflow): WorkflowReverseEngineeringFlow[] =>
        workflow.rules
          .map((rule, index) =>
            rule.resultLabel === 'A'
              ? {
                  accumulatedRuleSet: {},
                  currentLocation: index,
                  currentWorkflowLabel: workflow.label,
                }
              : null,
          )
          .filter(
            (value) => value !== null,
          ) as WorkflowReverseEngineeringFlow[],
    );

  currentWorkflowReverseEngineeringFlows.push(
    ...workflowsWithFallbackLabelA,
    ...workflowsWithRuleResultLabelA,
  );

  while (currentWorkflowReverseEngineeringFlows.length) {
    const attempt = currentWorkflowReverseEngineeringFlows.shift()!;

    const currentWorkflow = workflows[attempt.currentWorkflowLabel];

    if (attempt.currentLocation === 'fallback') {
      currentWorkflow.rules.forEach((rule) => {
        if (attempt.accumulatedRuleSet[rule.property] === undefined) {
          attempt.accumulatedRuleSet[rule.property] = {};
        }
        let ruleSetProperty = attempt.accumulatedRuleSet[rule.property]!;
        if (rule.operator === '>') {
          if (
            ruleSetProperty.lessThan === undefined ||
            ruleSetProperty.lessThan > rule.value
          ) {
            ruleSetProperty.lessThan = rule.value + 1;
          }
        } else {
          if (
            ruleSetProperty.greaterThan === undefined ||
            ruleSetProperty.greaterThan < rule.value
          ) {
            ruleSetProperty.greaterThan = rule.value - 1;
          }
        }
      });
    } else {
      const currentRule = currentWorkflow.rules[attempt.currentLocation];

      if (attempt.accumulatedRuleSet[currentRule.property] === undefined) {
        attempt.accumulatedRuleSet[currentRule.property] = {};
      }
      const ruleSetProperty = attempt.accumulatedRuleSet[currentRule.property]!;

      if (currentRule.operator === '>') {
        if (
          ruleSetProperty.greaterThan === undefined ||
          ruleSetProperty.greaterThan < currentRule.value
        ) {
          ruleSetProperty.greaterThan = currentRule.value;
        }
      } else {
        if (
          ruleSetProperty.lessThan === undefined ||
          ruleSetProperty.lessThan > currentRule.value
        ) {
          ruleSetProperty.lessThan = currentRule.value;
        }
      }

      currentWorkflow.rules
        .slice(0, attempt.currentLocation)
        .forEach((rule) => {
          if (attempt.accumulatedRuleSet[rule.property] === undefined) {
            attempt.accumulatedRuleSet[rule.property] = {};
          }
          const ruleSetProperty = attempt.accumulatedRuleSet[rule.property]!;
          if (rule.operator === '>') {
            if (
              ruleSetProperty.lessThan === undefined ||
              ruleSetProperty.lessThan > rule.value
            ) {
              ruleSetProperty.lessThan = rule.value + 1;
            }
          } else {
            if (
              ruleSetProperty.greaterThan === undefined ||
              ruleSetProperty.greaterThan < rule.value
            ) {
              ruleSetProperty.greaterThan = rule.value - 1;
            }
          }
        });
    }

    if (currentWorkflow.label === 'in') {
      finishedWorkflowReverseEngineeringFlows.push({
        accumulatedRuleSet: attempt.accumulatedRuleSet,
      });
      continue;
    }

    currentWorkflowReverseEngineeringFlows.unshift(
      ...Object.values(workflows)
        .filter((workflow) => workflow.fallbackLabel === currentWorkflow.label)
        .map((workflow) => ({
          ...attempt,
          currentWorkflowLabel: workflow.label,
          currentLocation: 'fallback' as const,
        })),
    );

    const nextWorkflowsWithMatchingRuleResultLabel = Object.values(
      workflows,
    ).filter((workflow) =>
      workflow.rules.some((rule) => rule.resultLabel === currentWorkflow.label),
    );

    currentWorkflowReverseEngineeringFlows.unshift(
      ...nextWorkflowsWithMatchingRuleResultLabel.flatMap(
        (nextWorkflow) =>
          nextWorkflow.rules
            .map((rule, index) =>
              rule.resultLabel === currentWorkflow.label
                ? {
                    ...attempt,
                    currentWorkflowLabel: nextWorkflow.label,
                    currentLocation: index,
                  }
                : null,
            )
            .filter(
              (value) => value !== null,
            ) as WorkflowReverseEngineeringFlow[],
      ),
    );
  }

  return unpackAndCountRuleSets(
    finishedWorkflowReverseEngineeringFlows.map(
      (flow) => flow.accumulatedRuleSet,
    ),
  );
}

/**
 * takes a list of rulesets
 * deduplicates them and calculates the total amount of unique parts that would match one of these rulesets
 */
export function unpackAndCountRuleSets(
  rulesets: WorkflowReverseEngineeringFlow['accumulatedRuleSet'][],
): number {
  return sum(
    rulesets.map((ruleset) => {
      return (
        getRange(ruleset.x) *
        getRange(ruleset.m) *
        getRange(ruleset.a) *
        getRange(ruleset.s)
      );
    }),
  );
}

function getRange(
  set: WorkflowReverseEngineeringFlow['accumulatedRuleSet'][keyof WorkflowReverseEngineeringFlow['accumulatedRuleSet']],
) {
  if (!set) {
    return 4000;
  }
  return (set.lessThan ?? 4001) - (set.greaterThan ?? 0) - 1;
}

export function solvePart2(input: string) {
  const parsedInput = parseInput(input);

  return countPossibleParts(parsedInput.workflows);
}
