// 의도: 중첩된 배열을 재귀적으로 평탄화하는 함수
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr);
    }
  }

  return result;
}

const res = flattenArray([3, 4, 5, [2, 4]]);
console.log("res", res);
// 1. 평탄화가 되어야 한다.
// 2. 평탄화가 되지 않고 배열의 모든 원소 개수만큼 중첩 배열이 나왔다.
// 3. 중첩 해결이
