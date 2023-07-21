const subtract = require('./subtract');

test('subtracts 2 numbers', () => {
    expect(
        subtract(6, 2)
        ).toBe(4)
})