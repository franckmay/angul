import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TT02Component } from './t-t02.component';

describe('TT02Component', () => {
  let component: TT02Component;
  let fixture: ComponentFixture<TT02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TT02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TT02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
