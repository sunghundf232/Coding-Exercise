// some , every = (find 메소드와 유사) --> // 조건을 만족하거나 만족하지 않을때 바로 종료

const numbers = [1,3,5,7,9];

//1. some : 배열에서 조건을 만족하는 요소가 1개 이상 즉 일부분이라도 조건을 만족하는 요소가 았는지 true , false 로 구별

const someReturn  = numbers.some((num)=>num > 5);

console.log('some:',someReturn);

console.log('===')

//2. every : 모든 요소가 조건을 만족하는지 true , false 구분

const everyReturn  = numbers.every((num)=>num > 5);
console.log('every:',everyReturn);

console.log('===');

//= find 메소드 와 유사


//1. some : 배열에서 조건을 만족하는 요소가 1개 이상 즉 일부분이라도 조건을 만족하는 요소가 았는지 true , false 로 구별

const someReturn1 = numbers.some((num,i)=>{
  console.log('some:',i);
  return num > 5;
});

console.log('some:',someReturn1 );

console.log('====');

/*
some: 0
some: 1
some: 2
some: 3
some: true

예시에서 5보다 크다 조건이니 : 5전까지 나오고 5이후꺼는 2개 있으니 true 나와
*/


//2. every : 모든 요소가 조건을 만족하는지 true , false 구분 --> 조건을 만족하지 않는 요소가 1개 이상 있는지 찾기

const everyReturn1 = numbers.every((num,i)=>{
  console.log('every:',i);
  return num > 5;
});

console.log('every:',everyReturn1)

// every: 0
// every: false

// 5보다 큰거 조건은 모두 충족되지 않으니 0 , false 출력

//if)

//const numbers = [];

// some --> false , every --> true 출력

// 최종정리

//배열 내 요소들이 그 조건에 만족하는지만 확인하려 할때 유용