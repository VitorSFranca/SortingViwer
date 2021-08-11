import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { sortingManagerReducer } from './sortingManager/sortingManager.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({ sortingManager: sortingManagerReducer })],
  providers: [],
  bootstrap: [],
})
export class NgRxModule {}
