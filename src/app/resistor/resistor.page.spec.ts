import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorPage } from './resistor.page';

describe('ResistorComponent', () => {
  let component: ResistorPage;
  let fixture: ComponentFixture<ResistorPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorPage],
    });
    fixture = TestBed.createComponent(ResistorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
