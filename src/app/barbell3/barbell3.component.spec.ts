import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barbell3Component } from './barbell3.component';

describe('Barbell3Component', () => {
  let component: Barbell3Component;
  let fixture: ComponentFixture<Barbell3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barbell3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Barbell3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
