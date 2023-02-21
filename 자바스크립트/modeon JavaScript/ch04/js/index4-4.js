// filter , find - 배열의 요소를 하나씩 보면서 반복적인 동작을 하는 메소드

//1. filter : 여러 값 중 특별한 조건을 추려낼때 -> 조건에 맞는 요소들만 새로운 배열을 만들어

//--> true 혹은 false를 평가되는 조건식을 리턴함 : 메소드를 호출한 배열을 반복하면서 콜백함수가 리턴하는 조건식이 true 요소만 모아서 새로운 배열 리턴함

//--> 조건에 따라 필터링 된 새로운 배열을 얻고자 할때


const devices = [
  {name:'Ga',brand:'Sa'},
  {name:'Mac',brand:'Ap'},
  {name:'ipad',brand:'Ap'},
  {name:'Gra',brand:'LG'},
];

const app/*이름은 마음대로 */ = devices.filter((l/* 이름은 마음대로*/)=>l/* 이름은 마음대로*/.brand === 'Ap');

console.log(app);

//--> 리턴값이 배열 

const La = devices.filter((l)=>l.name === 'Gra');

console.log(La);

console.log('===')

//--> 하나만 있는 요소를 리턴하더라도 하나의 요소를 가진 배열을 리턴함

const La1 = devices.filter((l)=>l.name === 'Gra');

console.log(...La1) // 배열 벗겨내기 : {name: 'Gra', brand: 'LG'} 출력됨

console.log('===')

//2. find - 여러값 중 하나의 값을 찾고 싶을때 

const La2 = devices.find((l)=>l.name === 'Gra');

console.log(La2); // {name: 'Gra', brand: 'LG'} 출력됨

