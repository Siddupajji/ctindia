import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barbell2Component } from './barbell2.component';

describe('Barbell2Component', () => {
  let component: Barbell2Component;
  let fixture: ComponentFixture<Barbell2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barbell2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Barbell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
