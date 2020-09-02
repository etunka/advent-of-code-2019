const {
  isNumberValid,
  areAdjacentsSame,
  doDigitsNeverDecrease
} = require("./day04");

test("The number is within the range of 206938 and 679128", () => {
  expect(isNumberValid(206938, 200000, 300000)).toBe(true);
  expect(isNumberValid(305679, 300000, 400000)).toBe(true);
  expect(isNumberValid(679129, 680000, 700000)).toBe(false);
  expect(isNumberValid(679, 500, 700)).toBe(false);
});

test("Two adjacent digits are the same", () => {
  expect(areAdjacentsSame(122345)).toBe(true);
  expect(areAdjacentsSame(223455)).toBe(true);
  expect(areAdjacentsSame(679118)).toBe(true);
  expect(areAdjacentsSame(666011)).toBe(true);
  expect(areAdjacentsSame(666101)).toBe(false);
  expect(areAdjacentsSame(206938)).toBe(false);
  expect(areAdjacentsSame(206999)).toBe(false);
  expect(areAdjacentsSame(679111)).toBe(false);
  expect(areAdjacentsSame(671113)).toBe(false);
});

test("Digits never decrease from left to right", () => {
  expect(doDigitsNeverDecrease(111123)).toBe(true);
  expect(doDigitsNeverDecrease(135679)).toBe(true);
  expect(doDigitsNeverDecrease(206938)).toBe(false);
});
