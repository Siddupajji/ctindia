import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbellsComponent } from './dumbells.component';

describe('DumbellsComponent', () => {
  let component: DumbellsComponent;
  let fixture: ComponentFixture<DumbellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
