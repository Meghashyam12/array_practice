const numbers = [2, 3, 6, 4, 1, 8, 9, 5];
const key = 5;

const splitSort = function (key) {
  return function (a, b) {
    if (a <= key || b <= key) {
      return a - b;
    }

    return b - a;
  };
};

console.log(numbers.sort(splitSort(key)));

// const numbers = [2, 3, 6, 4, 1, 8, 9, 5];

const isEven = function (number) {
  return number % 2 === 0;
};

const evenOddComparator = function (a, b) {
  if (isEven(a) && !isEven(b)) {
    return -1;
  }

  if (!isEven(a) && isEven(b)) {
    return 1;
  }

  return a - b;
};

console.log(numbers.sort(evenOddComparator));