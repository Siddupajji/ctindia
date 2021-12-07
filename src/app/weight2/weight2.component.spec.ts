import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weight2Component } from './weight2.component';

describe('Weight2Component', () => {
  let component: Weight2Component;
  let fixture: ComponentFixture<Weight2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Weight2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Weight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
