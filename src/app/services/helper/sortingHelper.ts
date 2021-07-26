export interface SortingSteps {
  type: string;
  originalArray: number[];
  sortedArray: number[];
  steps: number[][];
}

export const mergeSteps = (previousStep: SortingSteps, nextStep: SortingSteps): SortingSteps => {
  if (previousStep.type !== nextStep.type)
    throw new Error(
      `MergeSteps: Incompatible sorting types ${previousStep.type} != ${nextStep.type}`,
    );
  else if (previousStep.originalArray.toString() !== nextStep.originalArray.toString())
    throw new Error('MergeSteps: Different original arrays');
  return {
    type: previousStep.type,
    originalArray: previousStep.originalArray,
    sortedArray: nextStep.sortedArray,
    steps: [...previousStep.steps, ...nextStep.steps.slice(previousStep.steps.length)],
  };
};
