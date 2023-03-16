import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileuserDataComponent } from './profileuser-data.component';

describe('ProfileuserDataComponent', () => {
  let component: ProfileuserDataComponent;
  let fixture: ComponentFixture<ProfileuserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileuserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileuserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
