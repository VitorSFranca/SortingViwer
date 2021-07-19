export interface TestingData {
    array: number[];
    expected: number[];
};

export const filledArrayData: TestingData = {
    array: [3,0,-1,2,1],
    expected: [-1,0,1,2,3]
}

export const emptyArrayData: TestingData = {
    array: [],
    expected: []
}