import { ShipActions, ShipActionTypes } from '../actions/ship.actions';

export interface Ship {
  nome: string;
  carga: number;
}

export const initialShipState: Ship[] = [];

export function shipReducer(
  state = initialShipState,
  action: ShipActions
): Ship[] {
  switch (action.type) {
    case ShipActionTypes.AddShip:
      state.push(action.payload);
      return state;

    case ShipActionTypes.UnloadShip:
      state.map(
        (ship: Ship) => ship.nome === action.payload.navio ? ship.carga = 0 : ship
      );

      return state;

    case ShipActionTypes.LoadShip:
      state.map(
        (ship: Ship) => ship.nome === action.payload.navio ? ship.carga = action.payload.carga : ship
      );
      return state;

    default: {
      return state;
    }
  }
}
