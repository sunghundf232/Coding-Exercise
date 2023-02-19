// 아규먼트

//argument : 함수나 변수로 만들지 말기
function printArguments(a,b,c){
  //파라미터
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('----')
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments. length);
  console.log('----')

  //for of문으로 반복작업도 가능
  for(const arg of arguments){
    console.log(arg);
  }
};

console.log('----')

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

//함수 이름 : a,b,c 3개 있으므로 3개 보다 적을시 나머지는 underfined 떠
//3개보다 많으면 3개 이후에 전달된 값 무시!

//따라서 전달되는 아규먼트 패턴이 다양할때 개수에 따라 유연하게 출력하려면 ? argument 사용 배열이 아닌 유사배열(배열 메소드 사용불가)
//+ .length : 아규먼트 개수 확인
