import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TT04Component } from './t-t04.component';

describe('TT04Component', () => {
  let component: TT04Component;
  let fixture: ComponentFixture<TT04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TT04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TT04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
