// 종합정리

// //조건부 연산자 (Conditional operator)
// 삼항 연산자 (Ternary operator)라고도 불리는 이 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자 입니다. 
// if문과 같은 원리로 조건에 따라 값을 결정할 때 활용되는데요.

const cutOff = 80;

const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';

console.log(passChecker(75));

// 간단한 조건식의 경우에는 if문 보다 훨씬 더 간결하게 표현할 수 있는 장점이 있지만 내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장은 작성할 수 없다는 한계가 있기 때문에 if문을 완벽하게 대체할 수는 없다는 점. 꼭 기억해 주세요!


// 모던한 프로퍼티 표기법
// ES2015 이후부터는 자바스크립트에서 변수나 함수룰 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다음과 같이 축약해서 사용할 수 있습니다.

function sayHi() {
  console.log('Hi!');
}

const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title, 
  birth, 
  job, 
  sayHi,
};

console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: ƒ}

// 구조 분해 Destructuring
// 배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수가 있습니다.

// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
};

