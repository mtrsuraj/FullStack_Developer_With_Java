import { TestBed } from '@angular/core/testing';

import { ServicesfreeapiService } from './servicesfreeapi.service';

describe('ServicesfreeapiService', () => {
  let service: ServicesfreeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesfreeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
