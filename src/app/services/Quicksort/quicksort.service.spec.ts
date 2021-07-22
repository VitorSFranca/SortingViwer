import { TestBed } from '@angular/core/testing';
import { emptyArrayData, filledArrayData, StepsDataMock } from '../mockTestData';
import { QuicksortService } from './quicksort.service';

describe('QuicksortService', () => {
  let service: QuicksortService;

  const tester = (data: StepsDataMock) => {
    const result = service.quickSort(data.arrayToSort);

    expect(result.type).toBe(data.expectedResult.type);
    expect(result.originalArray?.toString()).toBe(data.expectedResult.sortedArray?.toString());
    expect(result.sortedArray?.toString()).toBe(data.expectedResult.sortedArray?.toString());
    expect(result.steps?.toString()).toBe(data.expectedResult.steps?.toString());
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

  it('Quicksort with empty array', () => {
    tester(emptyArrayData);
  });
});
