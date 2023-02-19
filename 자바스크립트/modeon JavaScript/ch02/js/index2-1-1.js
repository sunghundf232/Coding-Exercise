//함수 만드는 방법

//함수 선언  vs 함수 표현식

/*
//1.함수 선언: 선언을 하기 전에 호출 가능

printCodeit(); //codeit - > 호이스팅(선언문이 위쪽에 있는거)

function printCodeit(){
  console.log('Codeit');
}
*/

//2.함수 표현 : 변수에 할당해서 함수를 만드는 방법 - 선언 이전에 접근x - 에러 떠

printCodeit();

const printCodeit = function(){
  console.log('Codeit');
}

