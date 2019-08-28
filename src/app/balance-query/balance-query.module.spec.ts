import { BalanceQueryModule } from './balance-query.module';

describe('BalanceQueryModule', () => {
  let balanceQueryModule: BalanceQueryModule;

  beforeEach(() => {
    balanceQueryModule = new BalanceQueryModule();
  });

  it('should create an instance', () => {
    expect(balanceQueryModule).toBeTruthy();
  });
});
