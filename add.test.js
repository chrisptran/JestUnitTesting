const add = require('./add');

test('adds 2 numbers', () => {
    expect(
        add(2, 2)
        ).toBe(4)
})