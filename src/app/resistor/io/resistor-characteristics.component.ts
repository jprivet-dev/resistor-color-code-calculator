import { Component, Input } from '@angular/core';
import { Decode } from '../resistor.model';

@Component({
  selector: 'app-resistor-characteristics',
  templateUrl: './resistor-characteristics.component.html',
  styleUrls: ['./resistor-characteristics.component.scss'],
})
export class ResistorCharacteristicsComponent {
  @Input() decode!: Readonly<Decode> | null;
  @Input() resistance!: number | null;
  @Input() resistanceMax!: number | null;
  @Input() resistanceMin!: number | null;
  @Input() tolerance!: number | null;
  @Input() toleranceOhm!: number | null;
  @Input() thermalCoefficient!: number | null;
}
