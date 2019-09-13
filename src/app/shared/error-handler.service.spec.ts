import { TestBed, inject } from '@angular/core/testing';

import { XyzErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XyzErrorHandlerService]
    });
  });

  it('should be created', inject([XyzErrorHandlerService], (service: XyzErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
