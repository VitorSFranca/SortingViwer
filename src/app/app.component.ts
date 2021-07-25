import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'Sorting Viwer';
  sortingViwers: string[] = [];

  addSorting = () => {
    this.sortingViwers.push('Quicksort');
  };
}
