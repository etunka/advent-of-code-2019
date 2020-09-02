// It is a six-digit number.
// The value is within the range 206938-679128.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease;
// they only ever increase or stay the same (like 111123 or 135679).

// How many different passwords within the range given
// in your puzzle input meet these criteria?

function createPasswords(startNum, endNum) {
  let numbers = [];
  let count = startNum;
  const check = (number) =>
    isNumberValid(number, startNum, endNum) &&
    areAdjacentsSame(number) &&
    doDigitsNeverDecrease(number);

  while (count < endNum) {
    count++;
    if (check(count)) {
      numbers.push(count);
    }
  }

  return numbers.length;
}

export function isNumberValid(number, startNum, endNum) {
  const digits = number.toString().split("");

  if (number >= startNum && number <= endNum && digits.length === 6) {
    return true;
  } else {
    return false;
  }
}

export function areAdjacentsSame(number) {
  const digits = number.toString().split("");
  let result = false;

  for (let i = 0; i < digits.length; i++) {
    if (
      digits[i] === digits[i + 1] &&
      digits[i] !== digits[i + 2] &&
      digits[i] !== digits[i - 1]
    ) {
      result = true;
    }
  }
  return result;
}

export function doDigitsNeverDecrease(number) {
  const digits = number.toString().split("");
  let result = true;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] > digits[i + 1]) {
      result = false;
      break;
    }
  }
  return result;
}

// console.log(isNumberValid(235668));
// console.log(areAdjacentsSame(235668));
// console.log(doDigitsNeverDecrease(235665));

console.log(createPasswords(206938, 679128));
