import { Injectable } from '@angular/core';

export interface SortingSteps {
  type?: string;
  originalArray?: number[];
  sortedArray?: number[];
  steps?: number[][];
}

@Injectable({
  providedIn: 'root',
})
export class QuicksortService {
  partition = (
    array: Array<number>,
    left: number = 0,
    right: number = array.length - 1,
    sortingSteps: SortingSteps,
  ) => {
    const pivotIndex = Math.floor((right + left) / 2);
    const pivot = array[pivotIndex];
    const currentStep = [pivotIndex, left, right];
    const currentArray = [...array];
    let i = left;
    let j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i += 1;
      }

      while (array[j] > pivot) {
        j -= 1;
      }

      if (i <= j) {
        [currentArray[i], currentArray[j]] = [currentArray[j], currentArray[i]];
        currentStep.push(...[i, j]);
        i += 1;
        j -= 1;
      }
    }

    sortingSteps.steps?.push(currentStep);
    return { index: i, currentArray };
  };

  quickSort = (
    array: Array<number>,
    left: number = 0,
    right: number = array.length - 1,
    sortingSteps?: SortingSteps,
  ) => {
    const currentSortingSteps = sortingSteps || {
      type: 'Quicksort',
      originalArray: [...array],
      sortedArray: [],
      steps: [],
    };

    if (array.length > 1) {
      const { index, currentArray } = this.partition(array, left, right, currentSortingSteps);

      if (left < index - 1) {
        this.quickSort(currentArray, left, index - 1, currentSortingSteps);
      }

      if (index < right) {
        this.quickSort(currentArray, index, right, currentSortingSteps);
      }
    }
    currentSortingSteps.sortedArray = array;
    return currentSortingSteps;
  };
}
