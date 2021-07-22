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
    // console.log(this.quicksortService.quickSort([...this.sortingArray]));
  }

  showIterations(): void {
    this.nextIteration(this.result.steps ? this.result.steps[0] : []);
  }

  doSorting(): void {
    this.result = this.quicksortService.quickSort([...this.sortingArray]);
    this.sortingArray = this.result.sortedArray;
    // this.showIterations();
  }

  nextIteration(currentIteration: number[], step = 0, iteration = 0): void {
    let hasNext = false;
    let nextIterationItem = currentIteration;
    let cStep = step;
    let cIteration = iteration;
    [this.currentPivot, this.left, this.right] = currentIteration;
    this.swapLeft = currentIteration[3 + iteration * 2];
    this.swapRight = currentIteration[4 + iteration * 2];
    if (currentIteration.length - 3 - iteration * 2 > 2) {
      cIteration += 1;
      hasNext = true;
    } else if (this.result.steps && this.result.steps.length >= step + 1) {
      cIteration = 0;
      cStep += 1;
      nextIterationItem = this.result.steps[step];
      hasNext = true;
    }
    setTimeout(() => {
      [this.sortingArray[this.swapLeft], this.sortingArray[this.swapRight]] = [
        this.sortingArray[this.swapRight],
        this.sortingArray[this.swapLeft],
      ];
      if (hasNext) this.nextIteration(nextIterationItem, cStep, cIteration);
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
