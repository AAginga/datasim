import { BundleHistoryModule } from './bundle-history.module';

describe('BundleHistoryModule', () => {
  let bundleHistoryModule: BundleHistoryModule;

  beforeEach(() => {
    bundleHistoryModule = new BundleHistoryModule();
  });

  it('should create an instance', () => {
    expect(bundleHistoryModule).toBeTruthy();
  });
});
