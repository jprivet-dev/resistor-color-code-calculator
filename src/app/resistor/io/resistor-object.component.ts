import { Component, Input } from '@angular/core';
import { Decode } from '../resistor.model';

@Component({
  selector: 'app-resistor-object',
  templateUrl: './resistor-object.component.html',
  styleUrls: ['./resistor-object.component.scss'],
})
export class ResistorObjectComponent {
  @Input() decode!: Readonly<Decode>;
}
