const isLessThanOrEquals = function (number1, number2) {
  return number1 <= number2;
};

const isGreaterThanOrEquals = function (number1, number2) {
  return number1 >= number2;
};

const getComparisionOperator = function (from, to) {
  return from < to ? isLessThanOrEquals : isGreaterThanOrEquals;
};

const isValidStep = function (from, to, step) {
  return from < to ? step > 0 : step < 0;
};

const range = function (from, to, step) {
  const comparisionOperator = getComparisionOperator(from, to);
  const result = [];

  if (!isValidStep(from, to, step)) {
    return result;
  }

  for (let currentNumber = from; comparisionOperator(currentNumber, to); currentNumber += step) {
    result.push(currentNumber);
  }

  return result;
};

console.log(range(1, 10, 1));
console.log(range(10, 1, -1));
console.log(range(10, 1, 0));
console.log(range(10, 1, 1));
console.log(range(1, 10, -1));
console.log(range(1, 10, 2));