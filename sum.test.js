const sum = require('./sum');

test("Checks output of sum(1, 2) === 3", () =>{
  expect(sum(1,2)).toBe(3);
});