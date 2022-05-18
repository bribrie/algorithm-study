/*
The canonical path should have the following format:
The path starts with a single slash.
Any two directories are separated by a single slash.
The path does not end with a trailing.
The path only contains the directories on the path from the root directory to the target file or directory 
(i.e., no period '.' or double period '..')
*/

var simplifyPath = function (path) {
  let stack = [];
  let splited = path.split("/");

  for (let el of splited) {
    if (el === "" || el === ".") {
      continue;
    }
    if (el === "..") {
      stack.pop();
    } else {
      stack.push(el);
    }
  }
  return `/${stack.join("/")}`;
};

//let a = "/home/";
//let b = "/../";
let c = "/a/./b/../../c/";

console.log(simplifyPath(c));
