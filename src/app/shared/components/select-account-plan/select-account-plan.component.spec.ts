import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAccountPlanComponent } from './select-account-plan.component';

describe('SelectAccountPlanComponent', () => {
  let component: SelectAccountPlanComponent;
  let fixture: ComponentFixture<SelectAccountPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAccountPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAccountPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
