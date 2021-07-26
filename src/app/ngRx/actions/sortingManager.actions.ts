import { createAction } from '@ngrx/store';

const actionsName = 'Sorting Manager';

export const increment = createAction(`${actionsName} Increment`);
export const decrement = createAction(`${actionsName} Decrement`);
export const reset = createAction(`${actionsName} Reset`);
