//함수 만드는 방법

//함수 선언  vs 함수 표현식2

//3. 스코프의 차이

//(2)함수 표현식 - 할당된 변수에 따라 스코프 결정

var printJS = function(){
  console.log('JavaScript');
};

let printHi = function(){
  console.log('Hi');
};

const printCodeit = function(){
  console.log('Codeit');
};

printJS();
printHi();
printCodeit();