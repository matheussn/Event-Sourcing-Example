import { Action } from '@ngrx/store';

export enum PortActionTypes {
  ArrivedIn = '[ArrivedInPorto] Chegou em Porto',
  LeftThePort = '[LeftThePort] Patiu do porto'
}

export class ArrivedInPorto implements Action {
  readonly type = PortActionTypes.ArrivedIn;

  constructor(public payload: {porto: string, navio: string}) {}
}

export class LeftThePort implements Action {
  readonly type = PortActionTypes.LeftThePort;

  constructor(public payload: {porto: string, navio: string}) {}
}

export type PortActions = ArrivedInPorto | LeftThePort;
