const reducer = function (array, element) {
  let value = array[0];
  const key = array[1];
  if (Math.abs(key - element) < Math.abs(key - value)) {
    value = element;
  }

  return [value, key];
};

const getNearest = function (array, key) {
  const result = array.reduce(reducer, [-Infinity, key]);

  return result[0];
};

console.log(getNearest([1, 2, 3, 4, 5], 4));
console.log(getNearest([1, 2, 3, 6, 5, 4], 5));
console.log(getNearest([1, 2, 3, 5, 7], 6));
console.log(getNearest([1, 3, 5], 2));
console.log(getNearest([1, 3, 9], 8));