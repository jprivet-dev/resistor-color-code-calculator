import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appResistorColor]',
})
export class ResistorColorDirective {
  private _lastClassName = '';

  @Input('appResistorColor')
  set resistorColor(color: string) {
    const element = this._element.nativeElement;
    if (this._lastClassName) {
      element.classList.remove(this._lastClassName);
    }
    this._lastClassName = `resistor-${color}`;
    element.classList.add(this._lastClassName);
  }

  constructor(private _element: ElementRef) {}
}
