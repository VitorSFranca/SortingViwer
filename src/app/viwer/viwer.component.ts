import { Component } from '@angular/core';
import { QuicksortService } from '../services/Quicksort/quicksort.service';
import { SortingSteps } from '../services/sortingHelper';

@Component({
  selector: 'app-viwer',
  templateUrl: './viwer.component.html',
  styleUrls: ['./viwer.component.scss'],
})
export class ViwerComponent {
  sortingArray = [19, 24, 1, 31, 24, 15, 16, 26, 20, 37];
  result: SortingSteps = {
    type: '',
    originalArray: [],
    sortedArray: [],
    steps: [],
  };
  currentPivot = -1;
  left = -1;
  right = -1;
  swapLeft = -1;
  swapRight = -1;

  constructor(private quicksortService: QuicksortService) {
    this.quicksortService.quickSort([...this.sortingArray]);
  }

  doSorting(): void {
    this.result = this.quicksortService.quickSort([...this.sortingArray]);
    this.nextIteration();
  }

  nextIteration(step = 0, iteration = 0): void {
    const currentIteration = this.result.steps[step];
    [this.currentPivot, this.left, this.right] = currentIteration;
    this.swapLeft = currentIteration[3 + iteration * 2];
    this.swapRight = currentIteration[4 + iteration * 2];
    setTimeout(() => {
      [this.sortingArray[this.swapLeft], this.sortingArray[this.swapRight]] = [
        this.sortingArray[this.swapRight],
        this.sortingArray[this.swapLeft],
      ];
      if (currentIteration.length > 5 + 2 * iteration) this.nextIteration(step, iteration + 1);
      else if (this.result.steps.length > step + 1) this.nextIteration(step + 1, 0);
      else {
        this.currentPivot = -1;
        this.left = -1;
        this.right = -1;
        this.swapLeft = -1;
        this.swapRight = -1;
      }
    }, 1000);
  }
}
