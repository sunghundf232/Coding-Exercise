//this 
//5. 일반 함수  vs 애로우펑션 큰 차이 - this

console.log(this);

/*
function printCodeit(){
  console.log(this);
};
*/
//--> 애로우 펑션 걍 바꿔보기 - 모든 결과가 window 출력
const printCodeit = () =>{
  console.log(this)
}

//애로우 펑션이 선언되기 직전에 그때 유요한 this 값과 같은 값으로 

// ---> 따라서 객체 메소드 만들때 걍 일반함수로 해

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





