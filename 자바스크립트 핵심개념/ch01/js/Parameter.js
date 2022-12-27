console.log('스코프')
//스코프 : 범위,영역;

/*
function myFunction() //블록문
{
  let x = 3; //로컬변수,전역변수
  console.log(x);
};

myFunction();
console.log(x);
*/

let x = 3; //글로벌 변수, 전역변수

function myFunction() //블록문
{
  let x = 5; //로컬 변수 , 지역변수
  console.log(x);
}

myFunction();
console.log(x);

//지역변수는 블록문 안에서만 전역변수는 전체 적용