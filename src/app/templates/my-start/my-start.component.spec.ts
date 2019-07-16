/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyStartComponent } from './my-start.component';

describe('MyStartComponent', () => {
  let component: MyStartComponent;
  let fixture: ComponentFixture<MyStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
