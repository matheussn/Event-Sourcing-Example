import { PortActions, PortActionTypes } from '../actions/port.actions';

export interface Port {
  nome: string;
  estoque: number;
  navios: string[];
}

export const initialPortState: Port[] = [
  {
    nome: 'Porto 0',
    estoque: 10000,
    navios: []
  },
  {
    nome: 'Porto 1',
    estoque: 10000,
    navios: []
  }
];

export function portReducer(
  state = initialPortState,
  action: PortActions
): Port[] {
  switch (action.type) {
    case PortActionTypes.ArrivedIn:
      state.map(
        (port: Port) =>
          port.nome === action.payload.porto ?
            port.navios.push(action.payload.navio) : port
      );
      return state;
    case PortActionTypes.LeftThePort:
      state.map(
        (port: Port) =>
          port.nome === action.payload.porto ?
            port.navios.splice(
              port.navios.indexOf(action.payload.navio)
            ) : port
      );
      return state;
    default: {
      return state;
    }
  }
}
