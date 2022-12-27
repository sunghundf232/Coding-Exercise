//할당(지정/대입) 연산자

let name ="쫑이";
let x =5;

x = x-2;
console.log(x);

//함수 실행순서

//1.
function sayHello(){
  console.log('Hello');
  console.log('Welcome to Codeit');
};
console.log('함수 호출전');
sayHello();
console.log('함수 호출후');

//2.

function square(x){
  return x * x;
}

console.log('함수 호출전');
console.log(square(5));
console.log('함수 호출 후');

console.log('함수 호출전');
console.log(square(3)+square(4));
console.log('함수 호출 후');



