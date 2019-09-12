/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyImpressumComponent } from './my-impressum.component';

describe('MyImpressumComponent', () => {
  let component: MyImpressumComponent;
  let fixture: ComponentFixture<MyImpressumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImpressumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
