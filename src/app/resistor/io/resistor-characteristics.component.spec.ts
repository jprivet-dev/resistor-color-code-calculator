import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorCharacteristicsComponent } from './resistor-characteristics.component';

describe('ResistorCharacteristicsComponent', () => {
  let component: ResistorCharacteristicsComponent;
  let fixture: ComponentFixture<ResistorCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorCharacteristicsComponent]
    });
    fixture = TestBed.createComponent(ResistorCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
