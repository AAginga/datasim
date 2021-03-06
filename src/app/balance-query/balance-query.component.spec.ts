import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceQueryComponent } from './balance-query.component';

describe('BalanceQueryComponent', () => {
  let component: BalanceQueryComponent;
  let fixture: ComponentFixture<BalanceQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
