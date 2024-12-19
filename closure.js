// const style = [filled]
// const capped = [[1], [2, 3, 4], [5]];
// const style = [filled, hollow, filled]
// const alternating = [[1],[2],[3],[4],[5]]
//const style = [stars, hyphen, stars, hyphen, stars]

const getDiamondRow = function (size) {

  return function (rowLength) {
    return size - Math.abs(rowLength - size);
  };
};

function getDiamond(size) {
  const adjustedSize = size % 2 === 0 ? size - 1 : size;
  const diamond = getDiamondRow(adjustedSize);
  const diamondAsArray = [];

  for (let row = 1; row <= (adjustedSize * 2) - 1; row += 2) {
    diamondAsArray.push(diamond(row));
  }

  return diamondAsArray;
}

const getPattern = function (style, patternChar, fillerChar) {
  return function (rowLength) {
    return style(rowLength, patternChar, fillerChar);
  };
};

const monolith = function (array) {
  return array;
};

// const cycle = function () {

// };

// const 

const generatePattern = function (func, style, dimensions) {
  const widthArray = func(dimensions[0], dimensions[1]);
  console.log(style[1]);
  const structuredArray = style[2](widthArray);
  console.log(structuredArray);

  const mappedArray = structuredArray.map(getPattern(filled, style[0], style[1]));
  const paddedArray = pad(mappedArray);

  return paddedArray.join('\n');
};

const filled = function (rowLength, char) {
  return char.repeat(rowLength);
};

const pattern = 'diamond';
const length = 5;
const breadth = 0;


function getChoice(pattern) {
  switch (pattern) {
    case 'diamond':
      const patternChar = prompt('Enter Pattern Character: ');
      const fillerChar = patternChar;
      return [getDiamond, patternChar, fillerChar, monolith];

    default:
      break;
  }
}

const choice = getChoice(pattern);
const func = choice[0];
const style = [choice[1], choice[2], choice[3]];
console.log(style);

console.log(generatePattern(func, style, [length, breadth]));