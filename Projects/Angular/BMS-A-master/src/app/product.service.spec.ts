/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('Service: Product', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports:[HttpClientModule],
    });
  });

  it('should ...', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
