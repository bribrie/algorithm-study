/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function (students, sandwiches) {
  //student에 더이상 sandwiches[0]이 없으면 끝
  while (sandwiches.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
    const student = students.shift();
    if (student === sandwiches[0]) {
      sandwiches.shift();
    } else {
      students.push(student);
    }
  }
  return students.length;
};

let a = [1, 1, 1, 0, 0, 1];
let b = [1, 0, 0, 0, 1, 1];
console.log(countStudents(a, b));
