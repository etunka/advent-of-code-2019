const { sum, calculateModFuel, calculateTotalFuel } = require("./day01");

test("sum", () => {
  expect(sum([12, 18])).toBe(6);
  expect(sum([14])).toBe(2);
  expect(sum([1969])).toBe(654);
});

test("calculateModFuel", () => {
  expect(calculateModFuel(1969)).toBe(966);
  expect(calculateModFuel(100756)).toBe(50346);
});

test("calculateTotalFuel", () => {
  expect(calculateTotalFuel([1969, 100756])).toBe(966 + 50346);
});
