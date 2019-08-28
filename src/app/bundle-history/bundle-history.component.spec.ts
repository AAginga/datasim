import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleHistoryComponent } from './bundle-history.component';

describe('BundleHistoryComponent', () => {
  let component: BundleHistoryComponent;
  let fixture: ComponentFixture<BundleHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
