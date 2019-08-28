import { TestBed } from '@angular/core/testing';

import { BuyBundleService } from './buy-bundle.service';

describe('BuyBundleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyBundleService = TestBed.get(BuyBundleService);
    expect(service).toBeTruthy();
  });
});
