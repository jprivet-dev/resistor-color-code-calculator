import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorTableColorsComponent } from './resistor-table-colors.component';

describe('ResistorTableColorsComponent', () => {
  let component: ResistorTableColorsComponent;
  let fixture: ComponentFixture<ResistorTableColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorTableColorsComponent]
    });
    fixture = TestBed.createComponent(ResistorTableColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
