// 애로우 펑션2

/*
const getTwice = (number) =>{
  return number *2;
};
console.log(getTwice(2));
*/

// 함수 표현식 과 함수 선언 비교

//1. 함수 표현

const getTwice = function(number){
  return number *2;
}

// 2. 함수 선언

function getTwice(number){
  return number *2
}

const getTwice = number => number *2;
console.log(getTwice(6))