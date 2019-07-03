import { Action } from '@ngrx/store';

import { Ship } from '../reducers/ship.reducer';

export enum ShipActionTypes {
  AddShip = '[Add Ship] Adding Ship'
}

export class AddShip implements Action {
  readonly type = ShipActionTypes.AddShip;

  constructor(public payload: Ship) {}
}

export type ShipActions = AddShip;
