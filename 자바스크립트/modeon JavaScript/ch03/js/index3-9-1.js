//종합정리2

/*
Spread 구문
여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수가 있습니다.
*/
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용 될 수 있습니다.
// 참고로 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다는 부분도 잘 기억해 두시면 좋을 것 같습니다.

const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript', 
}
const newArray = [...topic]; // TypeError!