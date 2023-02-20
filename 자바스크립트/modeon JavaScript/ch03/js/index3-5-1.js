//구조분해2 - es2015 - 배열,객체 문법을 분해하는 문법

//배열 과 객체는 여려개 값을 다룰때 유용해

//if) 할당하는 배열의 길이가 선언된 변수의 개수보다 적으면? 순서대로 배열되고 그 순간 넘아가면 underfined 출력!

// const rank = ['쫑이','귐둥이 쫑이','잘생긴 쫑이'];



// const [macbook,ipad,airpods,coupon] = rank;

// console.log(macbook);
// console.log(ipad);
// console.log(airpods);
// console.log(coupon);


//함수의 파라미터와 비슷하게 기본값 작성 가능 - underfined 출력되지 않고 순서대로 받다가 넘어가면 밑에 예시처럼 "없음" 출력

 const rank = ['쫑이','귐둥이 쫑이','잘생긴 쫑이'];



 const [macbook,ipad,airpods,coupon = '없음'] = rank;

 console.log(macbook);
 console.log(ipad);
 console.log(airpods);
 console.log(coupon);

console.log('===');

//변수에 할당된 값을 서로 교환할때도 사용 가능

/*
let macbook2 = '귐둥이 쫑이';
let ipad2 = '잘쌩긴 쫑이';

console.log('MaceBook 당첨자:',macbook2);
console.log('ipad 당첨자:',ipad2);
*/

console.log('===')

//구조분해(Destructuring)를 활용하지 않으면? 두변수 값을 서로 교환할때 임시로 담아둘 변수를 만들어 맥북 값을 담고 맥북에는 아이패드 값 담고 아이패드는 탬프에 있는 맥북을 값을 담아 교환

// let temp = macbook2;
// macbook3 = ipad2;

let macbook2 = '귐둥이 쫑이';
let ipad2 = '잘쌩긴 쫑이';

console.log('MaceBook 당첨자:',macbook2);
console.log('ipad 당첨자:',ipad2);

//--> 위에 있는 코드를 구조분해(Destructuring) 문법으로 변경하기

[macbook2,ipad2] = [ipad2,macbook2];

console.log('MaceBook 당첨자:',macbook2);
console.log('ipad 당첨자:',ipad2)
