import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers/app.reducer';

export const selectAll = (state: AppState) => state;

export const selectShips = createSelector(
    selectAll,
    (state: AppState) => state.navios
);

export const selectPorts = createSelector(
    selectAll,
    (state: AppState) => state.portos
);
