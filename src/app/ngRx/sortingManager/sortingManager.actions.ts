import { createAction, props } from '@ngrx/store';

export const reducerName = 'Sorting Manager';

export const addSortingMethod = createAction(
  `[${reducerName}] Add Sorting Method`,
  props<{ sortingMethodName: string }>(),
);
