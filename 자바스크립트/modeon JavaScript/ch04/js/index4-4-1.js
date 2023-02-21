//filter , find 2

const devices = [
  {name:'Ga',brand:'Sa'},
  {name:'Mac',brand:'Ap'},
  {name:'ipad',brand:'Ap'},
  {name:'Gra',brand:'LG'},
];


// filter , find 차이


// 1. filter : 리턴값(배열)
// 2. find : 값
// 3. 공통 : 같은 배열에서 메소드 호출시 반복하는 횟수에 차이


//   1) find : 조건에 만족하는 하나의 값만 찾아 그 값 찾으면 반복 종료

//ex)

/*
const find = devices.filter((f)=>f.brand ==='Ap');
console.log(find);

const my = devices.find((n)=>n.brand ==='Ap');
*/

/*
const devices = [
  {name:'Ga',brand:'Sa'},
  {name:'Mac',brand:'Ap'},
  {name:'ipad',brand:'Ap'},
  {name:'Gra',brand:'LG'},
];

출력

(2) [{…}, {…}]
0 : {name: 'Mac', brand: 'Ap'}
1 : {name: 'ipad', brand: 'Ap'}
length : 2
[[Prototype]] : Array(0)

*/


//수정하기

const find = devices.filter((el,i)=>{
  console.log(i);
  return el.brand === 'Ap';
});

console.log(find);

console.log('===')

const my = devices.find((el,i)=>{
  console.log(i);
  return el.brand = 'Ap';
});

console.log(my);

/* 정리
1. filter : 조건을 만족하는 모든 값을 모아야 되서 배열의 모든 요소가 콘솔 출력

0
1
2
3
:56 
(2) [{…}, {…}]
0 : {name: 'Mac', brand: 'Ap'}
1 : {name: 'ipad', brand: 'Ap'}
length : 2
[[Prototype]] : Array(0)


2. find : 조건을 만족하는 하나의 요소만 찾으면 되서 인덱스 출력되고 종료

name: 'Ga', brand: 'Ap'}

brand : "Ap"
name : "Ga"
[[Prototype]] : Object
*/
  