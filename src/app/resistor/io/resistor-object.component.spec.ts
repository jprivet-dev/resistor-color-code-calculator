import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorObjectComponent } from './resistor-object.component';

describe('ResistorObjectComponent', () => {
  let component: ResistorObjectComponent;
  let fixture: ComponentFixture<ResistorObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorObjectComponent]
    });
    fixture = TestBed.createComponent(ResistorObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
