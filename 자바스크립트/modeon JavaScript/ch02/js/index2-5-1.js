//rest 아규먼트(es2015)2 - 아규먼트 단점 보완 -> ... 쓰고 시작

function printArguments(...args){
  console.log(args.splice(0,2))
  console.log(arguments.splice(0,2));
  console.log('-----')
}


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
