import { mergeSteps } from './sortingHelper';

describe('Service Helper', () => {
  let step = {
    originalArray: [],
    sortedArray: [],
    steps: [],
    type: '',
  };

  beforeEach(() => {
    step = {
      originalArray: [],
      sortedArray: [],
      steps: [],
      type: '',
    };
  });

  it('MergeSteps Error - Incompatible sorting types', () => {
    const sortingType1 = 'Quicksort';
    const sortingType2 = 'Mergesort';

    expect(() => {
      mergeSteps({ ...step, type: sortingType1 }, { ...step, type: sortingType2 });
    }).toThrow(
      new Error(`MergeSteps: Incompatible sorting types ${sortingType1} != ${sortingType2}`),
    );
  });

  it('MergeSteps Error - Different original arrays', () => {
    expect(() => {
      mergeSteps({ ...step, originalArray: [1] }, { ...step, originalArray: [2] });
    }).toThrow(new Error('MergeSteps: Different original arrays'));
  });
});
