import { ActionReducerMap } from '@ngrx/store';

import { initialPortState, Port, portReducer } from './port.reducer';
import { initialShipState, Ship, shipReducer } from './ship.reducer';

export interface AppState {
  navios: Ship[];
  portos: Port[];
}

export const initialState: AppState = {
  navios: initialShipState,
  portos: initialPortState
};

export const AppReducer: ActionReducerMap<AppState> = {
  navios: shipReducer,
  portos: portReducer
};
