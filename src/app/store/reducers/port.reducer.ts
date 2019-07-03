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
        (port: Port) => {
          if (port.nome === action.payload.porto) {
            port.navios.push(action.payload.navio);
          }
        }
      );
      return state;

    case PortActionTypes.LeftThePort:
      return state.map(
        (port: Port) => {
          if (port.nome === action.payload.porto) {
            port.navios.splice(
              port.navios.indexOf(action.payload.navio), 1
            );
            port.estoque -= action.payload.carga;
          }
          return port;
        }
      );

    case PortActionTypes.LoadPort:
      return state.map(
        (port: Port) => {
          if (port.nome === action.payload.porto) {
            port.estoque += action.payload.carga;
          }
          return port;
        }
      );

    default: {
      return state;
    }
  }
}
