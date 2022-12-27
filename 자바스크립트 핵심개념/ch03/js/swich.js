//swicth문 ==> 결과에 따라 다른 결과 값이 필요할때

let myChoice = 5;

switch(myChoice){
  case 1:
    console.log('토끼를 선택한 당신,..');
    break;
  case 2:
    console.log('고양를 선택한 당신,..'); 
    break;
  case 3:
    console.log('코알라를 선택한 당신,..');  
    break;
    case 4:
    console.log('강아지를 선택한 당신,..');  
    break;  
  default:
    console.log('1에서 4사이의 숫자를 선택해') //비교할 값이 조건과 일치 하지 않을때 ==> 생략가능

}