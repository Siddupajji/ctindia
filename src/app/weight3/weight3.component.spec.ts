import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weight3Component } from './weight3.component';

describe('Weight3Component', () => {
  let component: Weight3Component;
  let fixture: ComponentFixture<Weight3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Weight3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Weight3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
