import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDistributionComponent } from './subscription-distribution.component';

describe('SubscriptionDistributionComponent', () => {
  let component: SubscriptionDistributionComponent;
  let fixture: ComponentFixture<SubscriptionDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
