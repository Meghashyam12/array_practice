const array = [];
console.log(array);
console.log(array.push());
console.log(array);
console.log(array.push(2));
console.log(array);
console.log(array.push(1, 4));
console.log(array);

console.log(array.pop());
console.log(array);
console.log(array.pop(0));
console.log(array);
console.log(array.pop(0));
console.log(array);
console.log(array.pop(0));
console.log(array, 'after pop');

console.log(array.unshift(2), 'un');
console.log(array);

console.log(array.unshift());
console.log(array);

console.log(array.shift(),'shift');
console.log(array);

console.log(array.shift());
console.log(array);

const array2 = [1,2,3];
console.log(array2.join());
console.log(array2.join(','));
console.log(array2.join('*'));
console.log(array2.join('-'));
console.log(array2.join('=>'));
console.log(array2.join('""'));
console.log(array2.join("''"));
console.log(array2.join('/'));
console.log(array2.join('#'));