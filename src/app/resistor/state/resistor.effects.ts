import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resistorApiActions } from './resistor.actions';
import { characteristicsActions } from './resistor.actions';
import { resistorActions } from './resistor.actions';
import { ResistorService } from '../resistor.service';
import { exhaustMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CharacteristicsService } from '../../shared/characteristics.service';
import { ResistorFacade } from '../resistor.facade';

@Injectable()
export class ResistorEffects {
  private actions$ = inject(Actions);
  private resistorService = inject(ResistorService);
  private resistorFacade = inject(ResistorFacade);
  private characteristicsService = inject(CharacteristicsService);

  private resistor$ = this.resistorFacade.resistor$;

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

  calculateResistance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        resistorApiActions.retrieveResistorSuccess,
        resistorActions.updateDigit1,
        resistorActions.updateDigit2,
        resistorActions.updateDigit3,
        resistorActions.updateMultiplier,
      ),
      exhaustMap(() =>
        this.resistor$.pipe(
          map((resistor) =>
            characteristicsActions.updateResistance({
              resistance:
                this.characteristicsService.calculateResistance(resistor),
            }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
}
