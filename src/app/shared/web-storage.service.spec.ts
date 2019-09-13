import { TestBed, inject } from '@angular/core/testing';

import { XyzWebStorageService } from './web-storage.service';

describe('WebStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XyzWebStorageService]
    });
  });

  it('should be created', inject([XyzWebStorageService], (service: XyzWebStorageService) => {
    expect(service).toBeTruthy();
  }));
});
