// 변수와 스코프

/*
//es2015이전 - 문제 많아
var title ='Codeit';
//대안
let age = 20; //값 재할당시
const PI = 3.14 //값 재할당 필요없는 경우
*/

//변수 선언시 let 와 const 왜 쓰냐?


//1. 변수 유효한 시점 차이

/*
//var : 변수를 만들기 전에 사용되는 문제
console.log(title); //underfined 나와 
var title;
*/

//--> 호이스팅 : 변수선언과 동시에 값 할당시 할당된 값 자체는 그 이후의 조건이 가능(let , const 코드를 사용시 에러남)
console.log(title); //underfined
var title = 'codeit';
console.log(title);

console.log('----');

//2.중복선언 차이
//var : 중복선언이 가능하는 문제

var title = 'Codeit';
console.log(title);

//if) 코드입력 - 선언한 변수명을 중복으로 선언한 경우

var title = 'JavaScript';
console.log(title)

//결과) 위에서 선언한Codeit 코드가 사라진다.

//let , const 중복선언 불과
//var : 중복선언이 가능하는 문제

let title = 'Codeit';
console.log(title);

//if) 코드입력 - 선언한 변수명을 중복으로 선언한 경우

let title = 'JavaScript';
console.log(title)

//결과) 같은 이름으로 변수 선언시 에러 뜸






