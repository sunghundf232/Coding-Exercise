//try-- catch문 활용하기2 - 에러발생 이후에도 출력가능 - 각각 중괄호를 감싼 코드블록으로 이루어져 , 실행이 가능한 코드내에서 에러를 다뤄

//--> 예외처리(Exception Handling)에서 다뤄

// 따라서 1),2)번 자리에서 사용불가

// 따라서 let , const 처럼 블록 스코프를 가진 변수를 활용시 각 코드 블록안에 내용 잘 생각하기

/*
try {
  //코드
} catch(error){
  //에러가 발생했을 때 동작할 코드
}
*/

// 주의 사항

try{
  const title = 'Codeit';
} catch(err){
  console.error(err);
  //1)console.log(title);
}
//2)console.log(title);