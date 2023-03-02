import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequirementsComponent } from './new-requirements.component';

describe('NewRequirementsComponent', () => {
  let component: NewRequirementsComponent;
  let fixture: ComponentFixture<NewRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
