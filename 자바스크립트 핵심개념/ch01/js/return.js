//return 밑에 코드는 실행 x

function square(x){
  return x * x;
;
};

console.log(square(3));

function square(x1){
  console.log('return 전');
  return x * x;
  console.log('return 후'); //return 밑에 코드는 실행 x
};
//여기까지 함수 호출과 줄바꿈

console.log('함수 호출전');
console.log(square(3));
console.log('함수 호출 후')
