// Sort an array of student objects based on their scores. If scores are tied, sort by their names alphabetically. Use closures for sorting by scores and names.

const sortByScoreAndName = function (student1, student2) {
  if (student1[1] === student2[1]) {
    return student1[0].localeCompare(student2[0]);
  }

  return Math.sign(student2[1] - student1[1]);
};

const students = [['Meghashyam', 90], ['Rohini', 53], ['Siddhi', 71], ['Anagh', 90]];

console.log(students.sort(sortByScoreAndName));