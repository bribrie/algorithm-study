// 대소문자 구분됨
// 투포인터, 슬라이딩, 해쉬
function compareMaps(sMap, tMap) {
  // size가 같은지, key와 value가 같은지 확인
  if (sMap.size !== tMap.size) {
    return false;
  }

  for (let [key, value] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  //1. 우선 tMap 채우기
  for (let el of t) {
    if (!tH.has(el)) {
      tH.set(el, 1);
    } else {
      tH.set(el, tH.get(el) + 1);
    }
  }

  //2. s를 t.length-1까지 돌면서 우선 채움
  for (let i = 0; i < t.length - 1; i++) {
    if (!sH.has(s[i])) {
      sH.set(s[i], 1);
    } else {
      sH.set(s[i], sH.get(s[i]) + 1);
    }
  }

  /*3.
    투포인터, 슬라이딩 윈도우
    3-1. lt, rt 움직이면서
    3-2. 뻬고, 추가, 비교 반복 -> answer 카운트
   */
  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    if (!sH.has(s[rt])) {
      sH.set(s[rt], 1);
    } else {
      sH.set(s[rt], sH.get(s[rt]) + 1);
    }

    if (compareMaps(sH, tH)) {
      answer++;
    }

    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) {
      sH.delete(s[lt]);
    }

    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
