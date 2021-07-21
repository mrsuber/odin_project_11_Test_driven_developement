const calculator = require('../calculator')



describe('calculator', () => {
  test(' adding numbers', () => {
    expect(calculator(1,"+",1)).toBe(2);
  });

  test(' adding numbers', () => {
    expect(calculator(1,"-",1)).toBe(0);
  });

  test(' adding numbers', () => {
    expect(calculator(1,"x",1)).toBe(1);
  });

  test(' adding numbers', () => {
    expect(calculator(1,"/",1)).toBe(1);
  });

})
