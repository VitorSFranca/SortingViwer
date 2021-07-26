import { SortingSteps } from './helper/sortingHelper';

export interface StepsDataMock {
  arrayToSort: number[];
  expectedResult: SortingSteps;
}

export const filledArrayData: StepsDataMock = {
  arrayToSort: [19, 24, 1, 31, 24, 15, 16, 26, 20, 37],
  expectedResult: {
    type: 'Quicksort',
    originalArray: [19, 24, 1, 31, 24, 15, 16, 26, 20, 37],
    sortedArray: [1, 15, 16, 19, 20, 24, 24, 26, 31, 37],
    steps: [
      [4, 0, 9, 1, 8, 3, 6, 4, 5],
      [2, 0, 4, 0, 2],
      [2, 1, 4, 1, 4, 2, 3],
      [1, 1, 2, 1, 1],
      [3, 3, 4, 3, 3],
      [7, 5, 9, 6, 8, 7, 7],
      [6, 5, 7, 5, 6],
      [6, 6, 7, 6, 6],
      [8, 8, 9, 8, 8],
    ],
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
