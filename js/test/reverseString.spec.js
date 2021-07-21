
const reverseString = require('../reverseString')



describe('reverseString', () => {
  test('reverse the strings', () => {
    expect(reverseString("Aa")).toBe('aA');
  });
  test(' reverse the string', () => {
    expect(reverseString("The boy")).toBe('yob ehT');
  });
  })
