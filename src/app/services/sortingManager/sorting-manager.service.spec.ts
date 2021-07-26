import { TestBed } from '@angular/core/testing';

import { SortingManagerService } from './sorting-manager.service';

describe('SortingManagerService', () => {
  let service: SortingManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
