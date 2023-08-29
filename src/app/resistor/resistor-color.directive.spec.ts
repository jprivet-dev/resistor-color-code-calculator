import { ElementRef } from '@angular/core';
import { ResistorColorDirective } from './resistor-color.directive';

describe('ResistorColorDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.body);
    const directive = new ResistorColorDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
