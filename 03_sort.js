// Given an array of strings, write a function that sorts them based on their lengths. Use a closure to allow sorting in ascending or descending order of length.

const sortStrings = function (strings, order) {
  let direction = 1;
  
  if (order === 'descending') {
    direction = -1;
  }

  return strings.sort(function (strA, strB) {
    return (strA.length - strB.length) * direction;
  });
};

const strings = ['The book of everything', 'The book of nothing', 'My own book', 'Book', 'panchatantra', 'geeta', 'articulation'];
console.log(sortStrings(strings, 'ascending'));
console.log(sortStrings(strings, 'descending'));