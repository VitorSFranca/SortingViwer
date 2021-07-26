import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/sortingManager.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [],
})
export class NgRxModule {}
