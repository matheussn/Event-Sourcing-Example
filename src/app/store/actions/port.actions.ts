import { Action } from '@ngrx/store';

export enum PortActionTypes {
  ArrivedIn = '[ArrivedInPorto] Chegou em Porto',
  LeftThePort = '[LeftThePort] Patiu do porto',
  LoadPort = '[LoadPort] Carregando porto'
}

export class ArrivedInPorto implements Action {
  readonly type = PortActionTypes.ArrivedIn;

  constructor(public payload: {porto: string, navio: string}) {}
}

export class LeftThePort implements Action {
  readonly type = PortActionTypes.LeftThePort;

  constructor(public payload: {porto: string, navio: string, carga: number}) {}
}

export class LoadPort implements Action {
  readonly type = PortActionTypes.LoadPort;

  constructor(public payload: {porto: string, carga: number}) {}
}

export type PortActions = ArrivedInPorto | LeftThePort | LoadPort;
