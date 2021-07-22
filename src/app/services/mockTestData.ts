import { SortingSteps } from './sortingHelper';

export interface StepsDataMock {
  arrayToSort: number[];
  expectedResult: SortingSteps;
}

export const filledArrayData: StepsDataMock = {
  arrayToSort: [3, 0, -1, 2, 1],
  expectedResult: {
    type: 'Quicksort',
    originalArray: [3, 0, -1, 2, 1],
    sortedArray: [-1, 0, 1, 2, 3],
    steps: [[]],
  },
};

export const emptyArrayData: StepsDataMock = {
  arrayToSort: [],
  expectedResult: {
    type: 'Quicksort',
    originalArray: [],
    sortedArray: [],
    steps: [],
  },
};
