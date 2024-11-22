/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeServService } from './homeServ.service';

describe('Service: HomeServ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServService]
    });
  });

  it('should ...', inject([HomeServService], (service: HomeServService) => {
    expect(service).toBeTruthy();
  }));
});
