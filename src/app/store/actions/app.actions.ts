import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadShip = '[Load Ship] Colocando carga no navio',
  UnloadShip = '[UnLoad Ship] Descarregando Carga'
}

export class UnloadShip implements Action {
  readonly type = ActionTypes.UnloadShip;

  constructor(public payload: {navio: string, porto: string}) {}
}

export type ActionsUnion = UnloadShip ;
