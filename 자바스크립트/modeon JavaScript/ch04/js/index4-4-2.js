//filter , find 3

const devices = [
  {name:'Ga',brand:'Sa'},
  {name:'Mac',brand:'Ap'},
  {name:'ipad',brand:'Ap'},
  {name:'Gra',brand:'LG'},
];


// filter , find 차이


/* 정리
 3. 존재하지 않는 요소 찾거나 가장 마지막 위치한 요소를 찾을때 
 filter 메소드 와 반복 횟수가 같아져
*/
  
const find = devices.filter((el,i)=>{
  console.log(i);
  return el.brand === 'Ap';
});

console.log(find);

console.log('===')

const my = devices.find((el,i)=>{
  console.log(i);
  return el.brand === 'Banana'; //존재하지 않는 요소 찾을때 : underfined 떠
});

console.log(my);

// 따라서 반복횟수가 달라질수 있다는 부문은 프로그램 효율측면에서도 중요해

// 배열의 형태로 데이터를 다룰때 유용해
