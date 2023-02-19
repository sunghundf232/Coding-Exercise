//rest 아규먼트(es2015)2 - 아규먼트 단점 보완 -> ... 쓰고 시작
// ---> 일반 파라미터와 혼합해서 사용가능


//여기서 others 는 6번줄처럼 마지막에 작성
function printRank(first,second,...others){
  console.log('귀염둥이 견 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for(const arg of others){
    console.log(`참가자:${arg}`);
  };
};

printRank('쫑이','귀염둥이 쫑이','잘쑤ㅐㅇ긴쫑이','멋쨍이 쫑이','나는야 베트맨',)