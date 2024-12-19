// Write a function that sorts an array of numbers in ascending order. Allow the sort order (ascending or descending) to be specified as a parameter using a closure.

const sortNumbers = function (numbers, order) {
  const direction = order === 'ascending' ? 1 : -1;

  return numbers.sort(function (num1, num2) {
    return (num1 - num2) * direction;
  });

};

console.log(sortNumbers([3, 6, 38, 9, 1, 2, 0, 4, 7], 'ascending'));
console.log(sortNumbers([3, 6, 38, 9, 1, 2, 0, 4, 7], 'descending'));