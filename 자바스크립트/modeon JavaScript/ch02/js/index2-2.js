// 복습 - 값으로 함수 - 함수 표현식 가능
// 따라서 자바스크립트 함수 : 객체 타입
/*
const printJS = function(){
  console.log('나는 베트맨')
};
*/
/*
console.log(typeof printJS)
//function 출력 -> 함수 타입 : 객체
*/
/*
console.dir(0);
console.dir('나는 쫑이라고 해');
console.dir(true);
console.dir(null);
console.dir(undefined);
console.dir({});
console.dir([]);
console.dir(printJS)
*/

//다양한 형태로 호출
/*
//1. 함수 표현식으로 선억후 호출
printJS();
*/

/*
//2. 객체 안에 메소드로 활용
const myObject = {
  brand: "codeit",
  bornYear : 2017,
  isVerNice : true,
  sayHi:function(name){
    console.log(`안녕! ${name}`);
  }
};
myObject.sayHi('나는 쫑이야');
*/

/*
// 3. 배열에 담아 함수 호출

const myArray = [
  'codeit',
  2017,
  true,
  function(name){
    console.log(`안녕! ${name}`);
  }
];
myArray[3]('베트맨이야');
*/
/*
// 4. 값으로 평가되는 함수는 다른 함수의 파라미터로 전달 가능 - 돔이벤트시 파라미터를 전달하는 부분에 함수 선언

const myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click', function(){
  console.log('button is clicked')
  //돔이벤트시 파라미터를 전달하는 부분에 함수 선언(function ~ clicked)까지
});
*/

/*
//5. 함수 호출시 미리 선언된 함수를 전달하면서 조건에 따라 그 함수가 나중에 호출되거나 호출되지 앟는 동작을 구현할수 있따.

function makeQuiz(quiz,answer,success,fall){
  if(prompt(quiz)===answer){
    console.log(success());
  } else {
    console.log(fall());
  }
};

function getSuccess(){
  return '정답!'
};

function getFail(){
  return '오답'
};

const question = '5+3=?';
makeQuiz(question,'8',getSuccess,getFail);

//콜백함수 : 다른 함수의 파라미터에 전달된 함수

*/

// 6. 함수가 하나의 값으로 취급되는 특성은 어떤 함수에 return 값이 함수가 될수 있따.
function getPrintHi(){
  return function(){
    console.log('쫑이야!');
  };
};

const sayHi = getPrintHi();
//고차함수 : 함수를 리턴하는 함수 - 변수에 호출된값을 할당해서 활용
sayHi();
console.log('---')

//특별한 경우 : 이중 괄호를 사용해서 고차함수를 리턴되는 함수를 바로 호출
getPrintHi()();

//변수에 데이터 구조안에 할당, 다른 함수에 파라미터에 전달, 다른함수에 리턴값 가능 ------> 일급함수  따라서 자바스크립트는 1급 함수를 가진 언어

//Quiz

const sayCodeit = function () {
  console.log('Codeit');
};

sayCodeit();
2
const codeit1 = {
  title: 'codeit',
  printTitle: function () {
    console.log('Codeit');
  },
};

codeit1.printTitle();
3
const codeit2 = [
  function () {
    console.log('Codeit');
  },
];

codeit2[0]();
4
function getFunction() {
  return function () {
    console.log('Codeit');
  }
}

const printCodeit = getFunction;
printCodeit();
