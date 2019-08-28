import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBundlesComponent } from './buy-bundles.component';

describe('BuyBundlesComponent', () => {
  let component: BuyBundlesComponent;
  let fixture: ComponentFixture<BuyBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
