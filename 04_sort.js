// Create a function that sorts an array of numbers but excludes numbers that are divisible by a certain number. Use a closure to define the number to exclude multiples of.

const isNotDivisible = function (divisor) {
  return function (number) {
    return number % divisor !== 0;
  };
};

const sortNumbers = function (num1, num2) {
  return Math.sign(num1 - num2);
};

const sortNonMultiples = function (numbers, divisor) {
  const predicate = isNotDivisible(divisor);

  return numbers.filter(predicate).sort(sortNumbers);
};

const numbers = [2, 62, 23, 6, 7, 2, 8, 3];
const divisor = 2;

console.log(sortNonMultiples(numbers, divisor));