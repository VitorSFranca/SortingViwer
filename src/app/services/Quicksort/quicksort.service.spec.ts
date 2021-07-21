import { TestBed } from '@angular/core/testing';
import { emptyArrayData, filledArrayData, TestingData } from '../mockTestData';
import { QuicksortService } from './quicksort.service';

describe('QuicksortService', () => {
  let service: QuicksortService;

  const tester = (data: TestingData) => {
    expect(service.quickSort(data.array).sortedArray?.toString()).toBe(data.expected.toString());
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuicksortService);
  });

  it('Quicksort should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Quicksort with complete array', () => {
  //   tester(filledArrayData);
  // });

  // it('Quicksort with empty array', () => {
  //   tester(emptyArrayData);
  // });
});
