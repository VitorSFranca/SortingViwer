import { Injectable } from '@angular/core';
import { mergeSteps, SortingSteps } from '../sortingHelper';

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
    const sortedArray = [...array];
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
        [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
        currentStep.push(...[i, j]);
        i += 1;
        j -= 1;
      }
    }

    sortingSteps.steps?.push(currentStep);
    return { index: i, sortedArray };
  };

  quickSort = (
    array: Array<number>,
    left: number = 0,
    right: number = array.length - 1,
    sortingSteps?: SortingSteps,
  ): SortingSteps => {
    let currentSortingSteps = sortingSteps || {
      type: 'Quicksort',
      originalArray: [...array],
      sortedArray: [],
      steps: [],
    };

    let index = -1;
    if (array.length > 1) {
      const result = this.partition(array, left, right, currentSortingSteps);
      index = result.index;
      currentSortingSteps.sortedArray = result.sortedArray;

      if (left < index - 1) {
        currentSortingSteps = mergeSteps(
          currentSortingSteps,
          this.quickSort(currentSortingSteps.sortedArray, left, index - 1, currentSortingSteps),
        );
      }

      if (index < right) {
        currentSortingSteps = mergeSteps(
          currentSortingSteps,
          this.quickSort(currentSortingSteps.sortedArray, index, right, currentSortingSteps),
        );
      }
    }
    return currentSortingSteps;
  };
}
