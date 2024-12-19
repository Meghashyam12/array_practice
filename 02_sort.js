// Sort an array of objects representing books by their titles alphabetically. Use a closure function to dynamically choose whether to ignore case sensitivity.
const sortBooks = function (books, sensitivity) {
  return books.sort(function (a, b) {
    if (sensitivity === 'not-case-sensitive') {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    }

    return a < b ? -1 : 1;
  });
};

const books = ['The book of everything', 'The book of nothing', 'My own book', 'Book', 'panchatantra', 'geeta', 'articulation'];
console.log(sortBooks(books, 'case-sensitive'));
console.log(sortBooks(books, 'not-case-sensitive'));