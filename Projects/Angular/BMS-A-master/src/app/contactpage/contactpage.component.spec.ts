/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactpageComponent } from './contactpage.component';
import { HeaderFooterComponent } from '../header-footer/header-footer.component';
import { FooterComponent } from '../footer/footer.component';

describe('ContactpageComponent', () => {
  let component: ContactpageComponent;
  let fixture: ComponentFixture<ContactpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpageComponent ,HeaderFooterComponent,FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
