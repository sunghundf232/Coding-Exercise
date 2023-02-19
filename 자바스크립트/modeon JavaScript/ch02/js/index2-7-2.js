//this 
//3. 복습

/*
console.log(this);
// window ~ 객체 나와
*/

console.log(this);

function printThis(){
  console.log(this);
}
printThis();

// this 사용 , 함수  그 선언 함수를 호출시 : window 객체

console.log('====')

//4. 객체의 메소드로 호출 - 함수를 호출한 객체가 this 담아 but 각각 다른 객체가 출력

console.log(this);

function printCodeit(){
  console.log(this);
};

const myObj = {
  content:'myObj',
  printCodeit:printCodeit,
};

const otherObj = {
  content:'otherObj',
  printCodeit:printCodeit,
};

myObj.printCodeit();
otherObj.printCodeit();


console.log('====')





