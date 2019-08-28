import { BuyBundlesModule } from './buy-bundles.module';

describe('BuyBundlesModule', () => {
  let buyBundlesModule: BuyBundlesModule;

  beforeEach(() => {
    buyBundlesModule = new BuyBundlesModule();
  });

  it('should create an instance', () => {
    expect(buyBundlesModule).toBeTruthy();
  });
});
