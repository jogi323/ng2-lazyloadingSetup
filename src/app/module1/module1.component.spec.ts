import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Component } from './module1.component';

describe('Module1Component', () => {
  let component: Module1Component;
  let fixture: ComponentFixture<Module1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});