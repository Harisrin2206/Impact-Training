/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterValidateService } from './registerValidate.service';

describe('Service: RegisterValidate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterValidateService],
      imports:[HttpClientModule],
    });
  });

  it('should ...', inject([RegisterValidateService], (service: RegisterValidateService) => {
    expect(service).toBeTruthy();
  }));
});
