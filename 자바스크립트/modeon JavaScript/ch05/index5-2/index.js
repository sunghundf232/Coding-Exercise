// 모듈 파일 조건

//1. 파일만의 독립적인 스코프 가져야 함(모듈 스코프) - 모듈 파일내부에서 선언한 변수나 함수는 파일 안에서만 사용가능

print(title);

//젤 귀 귐둥이 쫑이 출력

// 변수나 함수가 같은 걸로 사용 :  새로운 값 입력시 전에 있는 값은 사라지고  그 값이 적용됨

/* print.js

const title = '젤 귀 귐둥이 쫑이';

function print(value){
  console.log(value);
}

*/

// // 변수나 함수가 같은 걸로 사용 :  새로운 값 입력시 전에 있는 값은 사라지고  그 값이 적용됨

//-->

/*
function print(value){
  console.log('내가 젤 귐둥이 쫑이다.')
}
*/

function print(value){
  console.log('내가 젤 귐둥이 쫑이다.')
};

const title = '젤 멋진 견 쫑이'

//SyntaxError 에러 떠