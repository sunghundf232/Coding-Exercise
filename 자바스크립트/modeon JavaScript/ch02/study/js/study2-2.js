//즉시 실행함수

(function () {
  console.log('Hi!');
})();

/*
보시는 것처럼 함수선언 부분을 소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한 번 더 붙여주는 방식인데요.
이렇게 하면 함수가 선언된 순간 바로 실행이 되는 겁니다.

이렇게 함수 선언과 동시에 즉시 실행되는 함수를 가리켜 즉시 실행 함수 (표현)이라고 부르는데요.
영어로는 Immediately Invoked Function Expression, 줄여서 IIFE라고 부릅니다.
*/

(function (x, y) {
  console.log(x + y);
})(3, 5);

/*
그리고 즉시 실행 함수도 일반 함수처럼 파라미터를 작성하고, 함수를 호출할 때 아규먼트를 전달할 수도 있는데요.
한 가지 주의할 점은 즉시 실행 함수는 함수에 이름을 지어주더라도 외부에서 재사용할 수 없다는 겁니다.
*/
(function sayHi() {
  console.log('Hi!');
})();

sayHi(); // ReferenceError

//그래서 일반적으로는 이름이 없는 익명 함수를 사용하는데요.
(function countdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
})(5);

/*
즉시 실행 함수의 활용
즉시 실행 함수는 말 그대로 선언과 동시에 실행이 이뤄지기 때문에 일반적으로 프로그램 초기화 기능에 많이 활용됩니다.
*/
(function init() {
  // 프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();

//혹은 재사용이 필요 없는, 일회성 동작을 구성할 때 활용하기도 하는데요.
const firstName = Young;
const lastName = Kang;

const greetingMessage = (function () {
  const fullName = `${firstName} ${lastName} `;

  return `Hi! My name is ${fullName}`;
})();