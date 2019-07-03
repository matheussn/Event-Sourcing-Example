import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrivedInPorto, LeftThePort } from 'src/app/store/actions/port.actions';
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
export class ShipComponent {
  @Input() navio: Ship;

  isMove = false;

  constructor(
    private store: Store<Ship>
  ) { }

  onStartAnimation(event) {
    if (event.fromState === 'p2' && event.toState === 'p1') {
      /* Disparar Evento de saída do porto 0 */
      this.store.dispatch(new LeftThePort({navio: this.navio.nome, porto: 'Porto 0'}));
    }
    if (event.fromState === 'p1' && event.toState === 'p2') {
      /* Disparar Evento de saída do porto 1 */
      this.store.dispatch(new LeftThePort({navio: this.navio.nome, porto: 'Porto 1'}));
    }
  }

  onDoneAnimation(event) {
    if (event.fromState === 'p2' && event.toState === 'p1') {
      /* Disparar Evento de chegada do porto 1 */
      this.store.dispatch(new ArrivedInPorto({navio: this.navio.nome, porto: 'Porto 1'}));
    }
    if (event.fromState === 'p1' && event.toState === 'p2') {
      /* Disparar Evento de chegada do porto 0 */
      this.store.dispatch(new ArrivedInPorto({navio: this.navio.nome, porto: 'Porto 0'}));
    }
  }

  toggleMove() {
    this.isMove = !this.isMove;
  }
}
