import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorTableCharacteristicsComponent } from './resistor-table-characteristics.component';

describe('ResistorTableCharacteristicsComponent', () => {
  let component: ResistorTableCharacteristicsComponent;
  let fixture: ComponentFixture<ResistorTableCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorTableCharacteristicsComponent],
    });
    fixture = TestBed.createComponent(ResistorTableCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
