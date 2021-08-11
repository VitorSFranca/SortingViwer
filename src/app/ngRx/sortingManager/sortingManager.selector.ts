import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reducerName } from './sortingManager.actions';
import { sortingManagerState } from './sortingManager.reducer';

export const sortingManagerSelector = createFeatureSelector<sortingManagerState>(reducerName);

export const selectSortingManager = createSelector(
  sortingManagerSelector,
  (state: sortingManagerState) => state.sortingMethods,
);
