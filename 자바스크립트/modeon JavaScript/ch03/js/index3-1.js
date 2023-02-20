// 조건 연산자

/*
if(조건){
  //조건이 true일때 동작
} else{
  //조건이 false 일때 동작
}

switch(값){
  case A:
    //값이 A와 일치할때 동작
    break;
    default:
      //값이 일치하는 case가 없을때 동작
}
*/

//조건 ? truthy 할때 표현식 : falsy 할때 표현식
//--> 3항 연산자

const CUT_OFF = 80;

function passChecker(score){
  return score > CUT_OFF ? '합격!' : '불합격!';
}
console.log(passChecker(75));

//3항 연산자를 if 문으로 고치기

const CUT_OFF1 = 80;

function passChecker1(score){
  if(score > CUT_OFF1){
    return '합격!';
  } else {
    return '불합격!'
  }
};
console.log(passChecker1(75));

//조건에 따라 변수 선언 또는 반복문 선언 불가
//-->조건연산자가 모든 if문 대체x

/* 예시
function passChecker1(score){
  //return score > CUT_OFF ? '합격!' : '불합격!';
  if(score > CUT_OFF){
    const msg = '합격!';
    return mag
  } else{
    for(let i=0; i<3;i++){
      console.log(i);
    }
    return '불합격'
  }
};
console.log(passChecker1(75));
*/