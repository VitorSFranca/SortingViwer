import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addSortingMethod } from 'src/app/ngRx/sortingManager/sortingManager.actions';

@Component({
  selector: 'app-viwer-creator',
  templateUrl: './viwer-creator.component.html',
  styleUrls: ['./viwer-creator.component.scss'],
})
export class ViwerCreatorComponent implements OnInit {
  x$: Observable<any> | undefined;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.x$ = this.store.pipe(select('sortingManager'));
  }

  addSortingMethod() {
    this.store.dispatch(addSortingMethod({ sortingMethodName: 'newName' }));
  }
}
