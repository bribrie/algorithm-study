// ? https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} columnNumber
 * @return {string}
 */

var convertToTitle = function (columnNumber) {
  const alphabets = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let front = parseInt(columnNumber / 26);
  let rear = columnNumber % 26;

  return alphabets[front] + alphabets[rear];
};
