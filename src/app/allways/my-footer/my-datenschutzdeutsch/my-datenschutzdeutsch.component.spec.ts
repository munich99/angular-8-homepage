/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDatenschutzdeutschComponent } from './my-datenschutzdeutsch.component';

describe('MyDatenschutzdeutschComponent', () => {
  let component: MyDatenschutzdeutschComponent;
  let fixture: ComponentFixture<MyDatenschutzdeutschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatenschutzdeutschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDatenschutzdeutschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
