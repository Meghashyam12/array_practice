const power = function (num1, num2) {
  return num1 ** num2;
};

const sum = function (num1, num2) {
  return num1 + num2;
};

const accumulateFirstElements = function (resultArray, element) {
  resultArray[0].push(element[resultArray[1]]);
  return resultArray;
};

const accumulateResults = function (resultArray, _, index) {
  const arr = resultArray[1].reduce(accumulateFirstElements, [[], index]);
  resultArray[0].push(arr[0].reduce(resultArray[2]));

  return resultArray;
};

const mapExtended = function (mapper, ...elements) {
  const widthArray = Array(elements[0].length).fill(0);
  const result = widthArray.reduce(accumulateResults, [[], elements, mapper]);

  return result[0];
};

console.log(mapExtended(sum, [1, 2]));
console.log(mapExtended(sum, [1, 1], [0, 0]));
console.log(mapExtended(sum, [1, 2], [2, 3]));
console.log(mapExtended(sum, [3, 3, 3], [2, 2, 2], [3, 3, 3]));
console.log();
console.log(mapExtended(power, [1, 1], [4, 8]));
console.log(mapExtended(power, [2, 3], [4, 2]));
console.log(mapExtended(power, [4, 5], [1, 1]));
console.log(mapExtended(power, [2, 3, 4], [2, 2, 2], [2, 3, 4], [2, 1, 1]));