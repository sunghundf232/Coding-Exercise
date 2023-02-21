// 에러와 여러 객체


//에러가 발생한 그순간 이 프로그램은 멈춘다.

//에러를 다루는 방법

//1. 에러 객체 이해가 필요
//--> name : 에러객체 이름 담아 , message : 구체적인 에러 내용 담아

//2. 종류

// 1) 존재하지 않는 변수나 함수 호출할때 : ReferenceError

/*
console.log('시작!');

const title = '쫑이';
console.log(title);
console.log(codeit)// 에러 --> 이 밑에는 동작 x

console.log('끝!')
*/
//2) 문자열 담긴 변수를 함수처럼 사용해서 잘못된 방식으로 다룰때 : TypeError
/*
console.log('시작!');

const title1 = '쫑이';
console.log(title1());
console.log(codeit)// 에러 --> 이 밑에는 동작 x

console.log('끝!')
*/

//3) 문법에 맞지 않게 입력 - SyntaxError -  코드 실행하기 전에 에러 떠
/*
console.log('귐둥이 쫑이');

const ti-tiel = '쫑이';

console.log(title1());
console.log(codeit)
*/





