import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateDistributionComponent } from './condidate-distribution.component';

describe('CondidateDistributionComponent', () => {
  let component: CondidateDistributionComponent;
  let fixture: ComponentFixture<CondidateDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidateDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidateDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
