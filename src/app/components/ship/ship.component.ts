import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrivedInPorto, LeftThePort, LoadPort } from 'src/app/store/actions/port.actions';
import { LoadShip, UnloadShip } from 'src/app/store/actions/ship.actions';
import { Ship } from 'src/app/store/reducers/ship.reducer';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
  animations: [
    trigger('move', [
      state('p2', style({left: '80%' , transform: 'scaleX(-1)'})),
      state('p1', style({left: '10%'})),
      transition('p1 => p2', [
        animate('8s', style({left: '80%'}))
      ]),
      transition('p2 => p1', [
        animate('8s', style({left: '10%'}))
      ])
    ])
  ]
})
export class ShipComponent implements OnInit {
  @Input() navio: Ship;

  isMove = false;

  constructor(
    private store: Store<Ship>
  ) { }

  ngOnInit() {
  }

  onStartAnimation(event) {
    if (event.fromState === 'p2' && event.toState === 'p1') {
      /* Disparar Evento de saída do porto 0 */
      this.store.dispatch(new LoadShip({navio: this.navio.nome, carga: 5}));
      this.store.dispatch(
        new LeftThePort({
          navio: this.navio.nome,
          porto: 'Porto 0',
          carga: this.navio.carga
        })
      );
    }
    if (event.fromState === 'p1' && event.toState === 'p2') {
      /* Disparar Evento de saída do porto 1 */
      this.store.dispatch(new LoadShip({navio: this.navio.nome, carga: 5}));
      this.store.dispatch(
        new LeftThePort({
          navio: this.navio.nome,
          porto: 'Porto 1',
          carga: this.navio.carga
        })
        );
    }
  }

  onDoneAnimation(event) {
    if (event.fromState === 'p2' && event.toState === 'p1') {
      /* Disparar Evento de chegada do porto 1 */
      this.store.dispatch(new ArrivedInPorto({navio: this.navio.nome, porto: 'Porto 1'}));
      this.store.dispatch(new LoadPort({porto: 'Porto 1', carga: this.navio.carga}));
      this.store.dispatch(new UnloadShip({navio: this.navio.nome}));
    }
    if (event.fromState === 'p1' && event.toState === 'p2') {
      /* Disparar Evento de chegada do porto 0 */
      this.store.dispatch(new ArrivedInPorto({navio: this.navio.nome, porto: 'Porto 0'}));
      this.store.dispatch(new LoadPort({porto: 'Porto 0', carga: this.navio.carga}));
      this.store.dispatch(new UnloadShip({navio: this.navio.nome}));
    }
  }

  toggleMove() {
    this.isMove = !this.isMove;
  }
}
