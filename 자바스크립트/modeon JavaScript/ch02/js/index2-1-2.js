//함수 만드는 방법

//함수 선언  vs 함수 표현식2

//3. 스코프의 차이

//(1)함수 언
/*
function printCodeit(){
  function printJS(){
    console.log('JavaScript');
    //함수밖에서 호출 불가 8~9번라인
  }
  console.log('Codeit');
  printJS();
}

printCodeit();
printJS(); //에러떠 
*/

//but 함수가 아닌 다른 조건으로 하면 전역변수가 되어 호출됨

const x = 4;

if(x<5){
  function printJS(){
    console.log('JavaScript');
  }
}
{
  function printCodeit(){
    console.log('Codeit');
  }
}
printCodeit();
printJS();
