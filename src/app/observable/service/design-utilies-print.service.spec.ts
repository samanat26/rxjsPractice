import { TestBed } from '@angular/core/testing';

import { DesignUtiliesPrintService } from './design-utilies-print.service';

describe('DesignUtiliesPrintService', () => {
  let service: DesignUtiliesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtiliesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
