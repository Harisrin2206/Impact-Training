/* tslint:disable:no-unused-variable */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('Service: Cart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      imports:[HttpClientModule],
    });
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
