import { TestBed, inject } from '@angular/core/testing';

import { PricesServiceService } from './prices-service.service';

describe('PricesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricesServiceService]
    });
  });

  it('should be created', inject([PricesServiceService], (service: PricesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
