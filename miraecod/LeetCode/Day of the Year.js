// ? https://leetcode.com/problems/day-of-the-year/

/**
 * @param {string} date
 * @return {number}
 */

var dayOfYear = function (date) {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));

  let feb = 31 + new Date(year, 2, 0).getDate();

  const datebox1 = [0, 31, feb, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const datebox2 = [0, 31, feb, 91, 121, 152, 182, 213, 244, 274, 305, 335];

  return feb === 59 ? datebox1[month - 1] + day : datebox2[month - 1] + day;
};
