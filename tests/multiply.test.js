const multiply = require('../multiply');

test('multiplies 2 by 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});