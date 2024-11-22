/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppearalComponent } from './appearal.component';
import { HeaderFooterComponent } from '../header-footer/header-footer.component';
import { FooterComponent } from '../footer/footer.component';

describe('AppearalComponent', () => {
  let component: AppearalComponent;
  let fixture: ComponentFixture<AppearalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearalComponent ,HeaderFooterComponent,FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
