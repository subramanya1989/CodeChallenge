import { TestBed } from '@angular/core/testing';

import { ApiSearchSeriviceService } from './api-search-serivice.service';

describe('ApiSearchSeriviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSearchSeriviceService = TestBed.get(ApiSearchSeriviceService);
    expect(service).toBeTruthy();
  });
});
