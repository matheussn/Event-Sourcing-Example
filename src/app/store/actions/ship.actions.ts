import { Action } from '@ngrx/store';

import { Ship } from '../reducers/ship.reducer';

export enum ShipActionTypes {
  AddShip = '[Add Ship] Adding Ship',
  LoadShip = '[Load Ship] Colocando carga no navio',
  UnloadShip = '[UnLoad Ship] Descarregando Carga'
}

export class AddShip implements Action {
  readonly type = ShipActionTypes.AddShip;

  constructor(public payload: Ship) {}
}

export class LoadShip implements Action {
  readonly type = ShipActionTypes.LoadShip;

  constructor(public payload: {navio: string, carga: number}) {}
}

export class UnloadShip implements Action {
  readonly type = ShipActionTypes.UnloadShip;

  constructor(public payload: {navio: string}) {}
}

export type ShipActions = AddShip | UnloadShip | LoadShip;
