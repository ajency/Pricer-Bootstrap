import { TestBed, inject } from '@angular/core/testing';

import { UploadsCsvServiceService } from './uploads-csv-service.service';

describe('UploadsCsvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadsCsvServiceService]
    });
  });

  it('should be created', inject([UploadsCsvServiceService], (service: UploadsCsvServiceService) => {
    expect(service).toBeTruthy();
  }));
});
