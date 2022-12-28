//숫자 표기법


let millionaire = 1000000000;
let myNumber = 1e9; //지수 표기법

//단위가 큰 정수나 자릿수가 많은 수는 'e'로 확인
//e - > 0 9 -> 0이 9개

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -6100000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

//20번 줄처럼 
// -9.1e-5 로 e 다음 '-' 면 숫자 만큼 10거듭제곱으로 나눠라

//숫자 표기법2

//16진법

let hex1 = 0xff;
let hex2 = 0xFF;

//8진법

let octal = 0o377;

//2진법

let binary = 0b11111111;

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

//Number

let myNumber2 = 0.3591;

/*
//toFixed(0~100) - 숫자 자릿수 정하기
console.log(Number(myNumber2.toFixed(3))); //0.359나와
//toFixed(n); n이 let 변수에 소수점 자리 개수 초과시 0으로
*/
//console.log(typeof myNumber2.toFixed(7)); //string 나와

//54번 줄 숫자형으로 변신하려면??

//console.log(typeof Number (myNumber2.toFixed(7))); //number값 나와

//58번 줄 typeof 지우면??

//console.log( Number (myNumber2.toFixed(7))); //0생략 0.3591 나와

//자바스크립트 값 앞에 '+' 붙이면? Number함수와 같은 결과 나와
console.log(+myNumber2.toFixed(2)); //0.36 나와

//toString(2~36) -> 결과값(문자열)

let myNumber3 = 255;

console.log(myNumber3.toString(2));
console.log(myNumber3.toString(8));
console.log(myNumber3.toString(16));

//71~73번줄 같은값

console.log(255..toString(2));
console.log(255..toString(8));
console.log(255..toString(16));

//절대값

console.log(Math.abs(-10));
console.log(Math.abs(-10));

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

