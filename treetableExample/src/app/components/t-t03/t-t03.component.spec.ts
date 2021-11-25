import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TT03Component } from './t-t03.component';

describe('TT03Component', () => {
  let component: TT03Component;
  let fixture: ComponentFixture<TT03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TT03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TT03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
