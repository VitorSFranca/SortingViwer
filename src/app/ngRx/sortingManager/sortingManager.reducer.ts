/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { addSortingMethod } from './sortingManager.actions';

export interface sortingManagerState {
  sortingMethods: string[];
}

export const initialState: sortingManagerState = {
  sortingMethods: [],
};

const _sortingManagerReducer = createReducer(
  initialState,
  on(addSortingMethod, (state: sortingManagerState, action) => ({
    ...state,
    sortingMethods: [...state.sortingMethods, action.sortingMethodName],
  })),
);

export function sortingManagerReducer(state: sortingManagerState | undefined, action: Action) {
  return _sortingManagerReducer(state, action);
}
