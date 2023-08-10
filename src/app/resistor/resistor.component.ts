import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResistorService } from './resistor.service';
import { ResistorApiActions } from './state/resistor.actions';
import { selectResistor } from './state/resistor.selectors';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.scss'],
})
export class ResistorComponent implements OnInit {
  private store = inject(Store);
  private resistorService = inject(ResistorService);
  resistor$ = this.store.select(selectResistor);

  ngOnInit() {
    this.resistorService
      .getResistor()
      .subscribe((resistor) =>
        this.store.dispatch(ResistorApiActions.retrievedResistor({ resistor })),
      );
  }
}
