import { Injectable } from '@angular/core';

type Comparator<T> = (o1: T, o2: T) => number;

export interface sortingSteps {
  type?: string;
  originalArray?: number[];
  sortedArray?: number[];
  steps?: number[][];
}

@Injectable({
  providedIn: 'root',
})
export class QuicksortService {

  /**
   * Split array and swap values
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {number}
   */
  partition(array: Array<number>, left: number = 0, right: number = array.length - 1, sortingSteps: sortingSteps) {
    const pivotIndex = Math.floor((right + left) / 2);
    const pivot = array[pivotIndex];
    const currentStep = [pivotIndex, left, right];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
  
      while (array[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        currentStep.push(...[i,j]);
        i++;
        j--;
      }
    }
  
    sortingSteps.steps?.push(currentStep);
    return i;
  }
  
  /**
   * Quicksort implementation
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {Array<number>}
   */
  quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1, sortingSteps?: sortingSteps) {
    if(!sortingSteps) {
      sortingSteps = {
        type: 'Quicksort',
        originalArray: [...array],
        sortedArray: [],
        steps: [],
      }
    }

    let index;
  
    if (array.length > 1) {
      index = this.partition(array, left, right, sortingSteps);
  
      if (left < index - 1) {
        this.quickSort(array, left, index - 1, sortingSteps);
      }
  
      if (index < right) {
        this.quickSort(array, index, right, sortingSteps);
      }
    }
    sortingSteps.sortedArray = array;
    return sortingSteps;
  }
}
