const duplicateArray = require('./duplicateArray');

test('creates another array', () => {
    const arr = [5, 10, 15];
    expect(duplicateArray(arr)).toEqual(arr);
    expect(duplicateArray(arr)).not.toBe(arr);
})