import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weight1Component } from './weight1.component';

describe('Weight1Component', () => {
  let component: Weight1Component;
  let fixture: ComponentFixture<Weight1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Weight1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Weight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
