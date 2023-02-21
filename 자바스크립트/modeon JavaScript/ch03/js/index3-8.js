//try-- catch문 활용하기1 - 에러발생 이후에도 출력가능 - 각각 코드블록으로 이루어져
/*
try {
  //코드
} catch(error){
  //에러가 발생했을 때 동작할 코드
}
*/

/*
function printMebers(members){
  for(const member of members){
    console.log(member)
  }
  //for--of 문 객체 사용 x -->  이 구간 에러
  // const codeit = {name :'codeit'};
  // printMebers(codeit); //객체
}

const teamA = ['상혜','혜진','지혜','혜선'];
printMebers(teamA);

const codeit = {name :'codeit'};
printMebers(codeit); //객체

const teamB = ['영훈','재훈','종훈','정훈'];
printMebers(teamB)
*/

//--> try--catch문 활용

function printMebers(members){
  try{
    for(const member of members){
      console.log(member);
    }
  } catch(err){
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해 주세요.`)
  }
};

const teamA = ['상혜','혜진','지혜','혜선'];
printMebers(teamA);

const codeit = {name :'codeit'};
printMebers(codeit); //객체

const teamB = ['영훈','재훈','종훈','정훈'];
printMebers(teamB)