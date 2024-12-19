const COMMA = ',';
const EMPTYSTRING = '';
const CAPACITY = 5;

function isEmpty(stack) {
  return count(stack) === 0;
}

function getPrefix(stack) {
  return isEmpty(stack) ? EMPTYSTRING : COMMA;
}

function push(stack, string) {
  stack += getPrefix(stack) + string;

  return stack;
}

function maxOfTwo(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function minOfTwo(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function slice(text, start, end) {
  const slicedStrStart = maxOfTwo(start, 0);
  const slicedStrEnd = minOfTwo(end, text.length - 1);
  let slicedString = EMPTYSTRING;

  for (let index = slicedStrStart; index <= slicedStrEnd; index++) {
    const currentTextChar = text[index];
    slicedString += currentTextChar;
  }

  return slicedString;
}

function pop(stack) {
  let newEndIndex = stack.length - 1;
  while(newEndIndex > 0 && stack[newEndIndex] !== COMMA) {
    newEndIndex--;
  }

  return slice(stack, 0, newEndIndex - 1);
}

function peek(stack) {
  let newEndIndex = stack.length - 1;
  while(newEndIndex > 0 && stack[newEndIndex] !== COMMA) {
    newEndIndex--;
  }

  return slice(stack, newEndIndex + 1, stack.length - 1);
}

function count(stack) {
  if (stack === EMPTYSTRING) {
    return 0;
  }
  
  let commaCount = 0;
  for (let index = 0; index < stack.length; index++) {
    if (stack[index] === COMMA) {
      commaCount += 1;
    }
  }

  return commaCount + 1;
}

function isFull(stack) {
  return count(stack) === CAPACITY;
}

function getCharToAdd(stack, index) {
  return stack[index] === COMMA ? '\n' : stack[index];
}

function getStack(stack) {
  let string = '';
  for (let reverseIndex = stack.length - 1; reverseIndex >= 0; reverseIndex--) {
    string += getCharToAdd(stack, reverseIndex);
  }

  return string;
}