import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resistorApiActions } from './resistor.actions';
import { characteristicsActions } from './resistor.actions';
import { ResistorService } from '../resistor.service';
import { exhaustMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CharacteristicsService } from '../characteristics.service';
import { Store } from '@ngrx/store';
import { selectResistor } from './resistor.selectors';

@Injectable()
export class ResistorEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private resistorService = inject(ResistorService);
  private characteristicsService = inject(CharacteristicsService);

  retrieveResistor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(resistorApiActions.retrieveResistor),
      exhaustMap(() =>
        this.resistorService.retrieveResistor().pipe(
          map((resistor) =>
            resistorApiActions.retrieveResistorSuccess({ resistor }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  updateCharacteristics$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(resistorApiActions.retrieveResistorSuccess),
      exhaustMap(() =>
        this.store.select(selectResistor).pipe(
          map((resistor) =>
            characteristicsActions.updateCharacteristics({
              characteristics:
                this.characteristicsService.calculateAll(resistor),
            }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
}
