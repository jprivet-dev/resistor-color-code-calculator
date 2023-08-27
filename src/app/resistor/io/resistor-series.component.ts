import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SeriesE12Item, SeriesE24Item, SeriesName } from '../resistor.model';
import {
  generateArduinoStarterKit,
  generateSeriesE12,
  generateSeriesE24,
} from '../resistor.utils';

@Component({
  selector: 'app-resistor-series',
  templateUrl: './resistor-series.component.html',
  styleUrls: ['./resistor-series.component.scss'],
})
export class ResistorSeriesComponent {
  @Input() seriesName!: SeriesName;
  @Output() seriesE12ItemEvent = new EventEmitter<SeriesE12Item>();
  @Output() seriesE24ItemEvent = new EventEmitter<SeriesE24Item>();

  readonly seriesE12Items = generateSeriesE12();
  readonly seriesE24Items = generateSeriesE24();
  readonly arduinoStarterKitItems = generateArduinoStarterKit();

  chooseSeriesE12Item(item: SeriesE12Item): void {
    this.seriesE12ItemEvent.emit(item);
  }

  chooseSeriesE24Item(item: SeriesE24Item): void {
    this.seriesE24ItemEvent.emit(item);
  }
}
