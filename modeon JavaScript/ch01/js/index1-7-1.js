// 변수와 스코프2

//3. 변수의 유효범위 스코프 차이

var x = 3; //Global Variable

function myFunc(){
  var y=4; // Local Variable - 함수 밖에서 사용 불가
  console.log(`x in myFunc:${x}`);
  console.log(`y in myFunc:${y}`);
}
myFunc();
console.log(x);
console.log(y);
