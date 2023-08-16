import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorPageComponent } from './resistor.page';

describe('ResistorComponent', () => {
  let component: ResistorPageComponent;
  let fixture: ComponentFixture<ResistorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorPageComponent],
    });
    fixture = TestBed.createComponent(ResistorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
