//파라미터 3 - 함수 호출이 밖에서 안쪽으로 다양한 값들을 전달하고자 할때

function defaultTest(x,y = x+3){
  /* 출력시  - defaultTest(2); 의 아규먼트 1개 있을때
  defaultTest(2)-> x 에 전달 y: 기본값사용
  --> x: 2 y: 5(기본값 x: 2 + 3 따라서 y: 5)
  */
 /* 출력시  - defaultTest(2,3); 의 아규먼트 2개 있을때
  defaultTest(2,3) : 
  x: 2 , y: 3
 */
  console.log(`x:${x}`);
  console.log(`y:${y}`);
};
defaultTest(2,3);

//파라미터 기본값 설정 문법: es2015 이후꺼만 적용