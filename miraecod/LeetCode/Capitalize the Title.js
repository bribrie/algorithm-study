// ? https://leetcode.com/problems/capitalize-the-title/

/**
 * @param {string} title
 * @return {string}
 */

var capitalizeTitle = function (title) {
  title = title.split(" ");
  let newstr = "";

  for (let el of title) {
    let word = "";
    for (let i = 0; i < el.length; i++) {
      if (el.length === 1 || el.length === 2) word += el[i].toLowerCase();
      else {
        if (i === 0) word += el[i].toUpperCase();
        else word += el[i].toLowerCase();
      }
    }
    newstr += word + " ";
  }

  return newstr.slice(0, newstr.length - 1);
};
