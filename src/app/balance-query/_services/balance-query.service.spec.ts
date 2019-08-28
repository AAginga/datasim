import { TestBed } from '@angular/core/testing';

import { BalanceQueryService } from './balance-query.service';

describe('BalanceQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceQueryService = TestBed.get(BalanceQueryService);
    expect(service).toBeTruthy();
  });
});
