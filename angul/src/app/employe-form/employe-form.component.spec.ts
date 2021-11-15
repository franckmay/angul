import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeFormComponent } from './employe-form.component';

describe('EmployeFormComponent', () => {
  let component: EmployeFormComponent;
  let fixture: ComponentFixture<EmployeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
