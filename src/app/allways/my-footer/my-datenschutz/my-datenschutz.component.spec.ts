/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDatenschutzComponent } from './my-datenschutz.component';

describe('MyDatenschutzComponent', () => {
  let component: MyDatenschutzComponent;
  let fixture: ComponentFixture<MyDatenschutzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatenschutzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDatenschutzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
