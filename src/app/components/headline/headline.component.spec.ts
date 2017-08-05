/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeadLineComponent } from './headline.component';

describe('HeadLineComponent', () => {
  let component: HeadLineComponent;
  let fixture: ComponentFixture<HeadLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
