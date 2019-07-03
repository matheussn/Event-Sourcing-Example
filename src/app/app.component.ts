import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/reducers/app.reducer';
import { Port } from './store/reducers/port.reducer';
import { Ship } from './store/reducers/ship.reducer';
import { selectPorts, selectShips } from './store/selectors/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ships: Ship[];
  ports: Port[];

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(selectShips).subscribe((ships: Ship[]) => this.ships = ships);
    this.store.select(selectPorts).subscribe((ports: Port[]) => this.ports = ports);
  }
}
