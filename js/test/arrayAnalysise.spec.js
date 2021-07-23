const arrayAnalysise = require('../arrayAnalysise')



describe('arrayAnalysise', () => {
  test(' adding numbers', () => {
    expect(arrayAnalysise([1,8,3,4,2,6])).toStrictEqual({ average: 4,  min: 1,  max: 8,  length: 6});
  });

})
