import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResistorApiActions } from './resistor.actions';
import { ResistorService } from '../resistor.service';
import { exhaustMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class ResistorEffects {
  private actions$ = inject(Actions);
  private resistorService = inject(ResistorService);

  retrieveResistor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ResistorApiActions.retrieveResistor),
      exhaustMap(() =>
        this.resistorService.retrieveResistor().pipe(
          map((resistor) =>
            ResistorApiActions.retrieveResistorSuccess({ resistor }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
}
