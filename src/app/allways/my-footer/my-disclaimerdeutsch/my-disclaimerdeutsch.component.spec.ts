/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDisclaimerdeutschComponent } from './my-disclaimerdeutsch.component';

describe('MyDisclaimerdeutschComponent', () => {
  let component: MyDisclaimerdeutschComponent;
  let fixture: ComponentFixture<MyDisclaimerdeutschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDisclaimerdeutschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDisclaimerdeutschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
