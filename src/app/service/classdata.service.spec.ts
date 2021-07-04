import { TestBed } from '@angular/core/testing';

import { ClassdataService } from './classdata.service';

describe('ClassdataService', () => {
  let service: ClassdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
