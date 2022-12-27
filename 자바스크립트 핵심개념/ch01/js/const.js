//상수  - 변신하지 않고 일정한 값 유지
//const pi = 3.14; //원주율 / 상수 / const pi; : 오류떠

//(상수 표현시) -> 모든 알파벳 대문자 , 2개이상 단어는 _로 구분 
//ex) const myNumber --> const MY_NUMBER

//const pi = 3.14 -->
const PI = 3.14;
let radius = 0 ; // 반지름



/**
 * let radius = null; -> 빈값 출력(변수에 들어갈게 결정하지 않을때나 일정하지 않는 경우)
 * let radius ='' (빈문자); -> 빈값 표현(일정하게 들어갈것을 간접적으로 표현)
 * let radius = 0(숫자); -> 빈값 표현(일정하게 들어갈것을 간접적으로 표현)
 */


//원의 넓이를 계산하는 함수

function calculateArea(){
  return PI * radius * radius;
}

//반지름에 따른 원의 넓이를 출력하는 함수

function printArea(){
  return `반지름이 ${radius}일때 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());