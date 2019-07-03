import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ArrivedInPorto } from 'src/app/store/actions/port.actions';
import { AddShip } from 'src/app/store/actions/ship.actions';
import { Ship } from 'src/app/store/reducers/ship.reducer';

@Component({
  selector: 'app-form-add-ship',
  templateUrl: './form-add-ship.component.html',
  styleUrls: ['./form-add-ship.component.scss']
})
export class FormAddShipComponent {

  formShip = this.formBuilder.group({
    shipName: [null, Validators.required]
  });

  constructor(
    private store: Store<Ship>,
    private formBuilder: FormBuilder
    ) { }

  onSubmit() {
    if (this.formShip.valid) {
      const nome = this.formShip.get('shipName').value;
      this.store.dispatch(new AddShip({nome, nomePorto: 'Porto 0', carga: 0}));
      this.store.dispatch(new ArrivedInPorto({navio: nome, porto: 'Porto 0'}));
    }
  }

}
