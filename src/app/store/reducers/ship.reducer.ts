import { ShipActions, ShipActionTypes } from '../actions/ship.actions';

export interface Ship {
  nome: string;
  carga: number;
  nomePorto: string;
}

export const initialShipState: Ship[] = [];

export function shipReducer(
  state = initialShipState,
  action: ShipActions
): Ship[] {
  switch (action.type) {
    case ShipActionTypes.AddShip: {
      state.push(action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
