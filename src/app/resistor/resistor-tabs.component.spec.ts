import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorTabsComponent } from './resistor-tabs.component';

describe('ResistorDataComponent', () => {
  let component: ResistorTabsComponent;
  let fixture: ComponentFixture<ResistorTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorTabsComponent],
    });
    fixture = TestBed.createComponent(ResistorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
