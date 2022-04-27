function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((el) => {
    return el.split(" ");
  }); //중복 제거
  let countMap = new Map();
  let reporterMap = new Map();

  for (let el of reports) {
    const reportedUser = el[1];
    countMap.set(reportedUser, countMap.get(reportedUser) + 1 || 1);
  }

  //k번 이상 확인
  for (let el of reports) {
    const reportedUser = el[1];
    const reportingUser = el[0];
    if (countMap.get(reportedUser) >= k) {
      reporterMap.set(reportingUser, reporterMap.get(reportingUser) + 1 || 1);
    }
  }

  let answer = id_list.map((el) => reporterMap.get(el) || 0);
  return answer;
}

// Case 1
let list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;

//Case 2
// let list = ["con", "ryan"];
// let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// let k = 3;

console.log(solution(list, report, k));
