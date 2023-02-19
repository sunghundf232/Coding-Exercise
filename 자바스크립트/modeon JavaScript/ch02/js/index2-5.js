// 아규먼트 복습
//단점
/*
1. 유사배열 이라 - 배열 메소드 사용 [] 불가
2. 함수 호출할때 아규먼트 전체를 다뤄 일부만 묶에서 다룰러면 세분하 해야 함
*/
function printArguments(){
  for(let arg of arguments){
    console.log(arg);
  };
  console.log('-------')
};

printArguments(
  // 파라미터를 전달하는 값 : 아규먼트  
  '쫑이',"귀여운 쫑이","잘쒱긴 쫑이"
);
printArguments(
  // 파라미터를 전달하는 값 : 아규먼트  
  '달려라 쫑이'
);
printArguments(
  // 파라미터를 전달하는 값 : 아규먼트  
  '쫑이','귀염둥이 쫑이','멋째ㅜㅐㅇ이쫑이','나는 쫑이라고해'
);


//rest 아규먼트(es2015) - 아규먼트 단점 보완 -> ... 쓰고 시작

function printArguments(...args){
  for(let arg of args){
    console.log(arg);
  }
  console.log('----')
};
printArguments(
  // 파라미터를 전달하는 값 : 아규먼트  
  '쫑이',"귀여운 쫑이","잘쒱긴 쫑이"
);
printArguments(
  // 파라미터를 전달하는 값 : 아규먼트  
  '달려라 쫑이'
);
printArguments(
  // 파라미터를 전달하는 값 : 아규먼트  
  '쫑이','귀염둥이 쫑이','멋째ㅜㅐㅇ이쫑이','나는 쫑이라고해'
);


