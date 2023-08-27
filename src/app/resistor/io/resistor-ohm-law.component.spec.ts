import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorOhmLawComponent } from './resistor-ohm-law.component';

describe('ResistorOhmLawComponent', () => {
  let component: ResistorOhmLawComponent;
  let fixture: ComponentFixture<ResistorOhmLawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorOhmLawComponent]
    });
    fixture = TestBed.createComponent(ResistorOhmLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
