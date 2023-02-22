//reduce - 콜백함수가 반복해서 동작할때 직전에 동작할 콜백함수가 리턴한 값 전달

// 1. 다음 콜백함수의 acc에 전달한 값 리턴 --> 매 반복할때마다 콜백함수의 리턴값을 다음 콜백함수 acc에 전달
//마지막에 실행되는 콜백함수의 리턴값이 reduce 메소드 최종 리턴값

// 2. 처음 실행되는 콜백함수 acc 전달받을 값
// 첫번째 콜백함수가 동작할때 acc 값을 reduce 두번째 아규먼트에 전달

//3. 콜백함수의 acc 통해 현재 동작하는 리턴값이 다음에 동작할 콜백함수에 영향 끼쳐




/* b : 배열요소(꼭 필요), index = i : 요소 인덱스:방번호, arr: 반복적인 배열 자체
a.reduce((
  acc(누산기), : 
  
  el, = b : 배열요소(꼭 필요) : 이름은 마음대로
  
  i, =  index = i : 요소 인덱스:방번호
  
  arr : 반복적인 배열 자체
  
  )=>{
    return bd(전달할 값 : 리턴)
  },cd)
  
  */

 
 /* 1. reduce 문법 예시
 
 const numbers = [1,2,3,4];

 
 numbers.reduce((acc,el,i,arr)=>{
  return nextAccValue; //첫번째 리턴값
}, initialAccValue); // 두번째 리턴값



*/

//reduce - 콜백함수가 반복해서 동작할때 직전에 동작할 콜백함수가 리턴한 값 전달

// 1. 다음 콜백함수의 acc에 전달한 값 리턴 --> 매 반복할때마다 콜백함수의 리턴값을 다음 콜백함수 acc에 전달
//마지막에 실행되는 콜백함수의 리턴값이 reduce 메소드 최종 리턴값

// 2. 처음 실행되는 콜백함수 acc 전달받을 값
// 첫번째 콜백함수가 동작할때 acc 값을 reduce 두번째 아규먼트에 전달

//3. 콜백함수의 acc 통해 현재 동작하는 리턴값이 다음에 동작할 콜백함수에 영향 끼쳐

// reduce 문법 예시2
 

const numbers = [1,2,3,4];

const sumAll = numbers.reduce((acc,el,i)=>{
  console.log(`${i}번 index의 요소로 콜박함수가 동작중입니다.`);
  console.log('acc:',acc);
  console.log('el:',el);
  console.log('====');

  return acc + el;
}); // 여기서 0 : 선택사항 : 처음에 동작하는 콜백함수에 acc에 전달 but) 걍 써!

/* 출력
0번 index의 요소로 콜박함수가 동작중입니다.
 acc: 0
 el: 1
====
60 1번 index의 요소로 콜박함수가 동작중입니다.
 acc: 1
 el: 2
 ====
60 2번 index의 요소로 콜박함수가 동작중입니다.
 acc: 3
 el: 3
====
60 3번 index의 요소로 콜박함수가 동작중입니다.
 acc: 6
 el: 4
====
68 sumAll: 10
*/

/*
const sumAll = numbers.reduce((acc,el,i)=>{
  console.log(`${i}번 index의 요소로 콜박함수가 동작중입니다.`);
  console.log('acc:',acc);
  console.log('el:',el);
  console.log('====');

  return acc + el;
},0); 여기서 0: 삭제시

1번 index의 요소로 콜박함수가 동작중입니다.
 acc: 1
 el: 2
 ====
reduce4.js:60 2번 index의 요소로 콜박함수가 동작중입니다.
 acc: 3
 el: 3
 ====
reduce4.js:60 3번 index의 요소로 콜박함수가 동작중입니다.
 acc: 6
 el: 4
 ====
reduce4.js:103 sumAll: 10

0 대신 1부터 시작해서 0빼고 1부터 시작

*/



console.log('sumAll:',sumAll) //10

