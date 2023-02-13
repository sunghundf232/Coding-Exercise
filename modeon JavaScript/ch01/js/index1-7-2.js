// 변수와 스코프3

//var : 함수 단위로만 구분 - 조건문 ,반복문안에 새로운 변수를 만들게 되더라도 모두 전역변수

var x = 3;

if(x<4){
  var y =3;
}
for(var i=0; i<5; i++){
  console.log(i);
}

console.log('x:',x);
console.log('x:',y);
console.log('x:',i);

/* 정리
let ,const 중괄호 사용하는 기준(코드블록)으로 변수의 유효범위 정해
*/

console.log('---')

let x = 3;

if(x<4){
  let y =3; //y선언 x --> 중괄호 안에 있어서 지역변수로 평가 따라서 if문 밖에서 사용 x
}
for(let i=0; i<5; i++){
  console.log(i);
}

console.log('x:',x);
console.log('x:',y);
console.log('x:',i);


