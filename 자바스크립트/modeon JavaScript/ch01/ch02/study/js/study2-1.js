//이름 있는 함수

/*
Named Function Expression (기명 함수 표현식)
함수 표현식으로 함수를 만들 때는 선언하는 함수에 이름을 붙여줄 수도 있는데요.
이름이 있는 함수 표현식, 즉 기명 함수 표현식이라고 부릅니다.
함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가지게 되는데요.
*/
const sayHi = function () {
  console.log('Hi');
};

console.log(sayHi.name); // sayHi

/*
console.log(sayHi.name); // sayHi
이렇게 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가지게 됩니다. 하지만 함수에 이름을 붙여주게 되면, name 속성은 함수 이름을 문자열로 갖게 되는데요.
*/
const sayHi2 = function printHiInConsole() {
  console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole

//이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 함수를 호출할 때 사용할 수는 없습니다.

const sayHi3 = function printHiInConsole() {
  console.log('Hi');
};

printHiInConsole(); // ReferenceError

//기명 함수 표현식은 일반적으로 함수 내부에서 함수 자체를 가리킬 때 사용되는데요. 아래 코드를 살펴봅시다.

let countdown = function(n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

countdown(5);