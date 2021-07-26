import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../ngRx/actions/sortingManager.actions';

@Component({
  selector: 'app-viwer-creator',
  templateUrl: './viwer-creator.component.html',
  styleUrls: ['./viwer-creator.component.scss'],
})
export class ViwerCreatorComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
