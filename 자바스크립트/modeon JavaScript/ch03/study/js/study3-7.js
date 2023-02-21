// 에러 발생시 프로그램 종료 방지 하고 다루는 방법

/*
console.log('에러전');

const codeit = '코드잇';
console.log(codeit);

codeit = 'codeit';
//const 변수에 새로운 변수 재할당 되어 에러 발생
// 이 이후것은 출력x

const language = 'JavaScript';
console.log(language);

console.log('에러후')
*/

//1. try catch 문 - 에러발생 이후것은 종료된것이 아니라 catch문 안에 있는것은 동작

/*
try {
  //코드
} catch(error){
  //에러가 발생했을 때 동작할 코드
}
*/

//--> 적용하기

try{
  console.log('에러전');

const codeit = '코드잇';
console.log(codeit);

codeit = 'codeit';  //--> 주석처리시 에러 후는 출력되지 않고 a}  까지 즉 이 예시처럼 
//  //const language = 'JavaScript';
// console.log(language);

// 여기까지만 출력됨

// codeit = 'codeit'; 여기서 에러가 발생되어 a} a까지는 동작하지 않아.

const language = 'JavaScript';
console.log(language);

} catch(e/* 또는 e,err ,error*/){ //a(b) :  b가 파라미터(이름은 마음대로)
  console.log('에러후');
  console.log(e);
  console.log(e.name);
  console.log(e.message);

  console.log('===');

  //익숙한 모습으로 에러를 출력하고 싶을때
  console.error('에러후');
  console.error(e);
  console.error(e.name);
  console.error(e.message);
}
