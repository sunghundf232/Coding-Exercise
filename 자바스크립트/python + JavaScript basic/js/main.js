console.log('안녕 쫑이라고 해');

//미술관 티켓 가격을 계산해 주는 함수
/*standard,student는 카테고리에 해당 하는 티겟 개수를 뜻합니다.*/

/**
 * 미술관 티켓 가격을 계산해 주는 함수
 * standard,student는 카테고리에 해당 하는 티겟 개수를 뜻합니다.
 */

function ticketPrice(standard,student) {//스네이크 케이스(권장 - 자바스크립트 이외) , 카멜케이스(권장 - 자바스크립트)
  let standardPrice = 15000;
  let studentPrice = 8000;

  let totalPrice = standard * standardPrice + student * studentPrice;

  return totalPrice;
}
console.log(ticketPrice(3,0));
console.log(ticketPrice(2,2));

console.log('-------');




console.log(1+8);
console.log(100/2);


console.log('-----');

let i=3;
i +=2;

console.log(i);

let j=-5;
j*=3;

console.log(j);

let i2=5;

i2++;
console.log(i2);

i--;
console.log(i);

console.log('----');

let i3=1;
while (i3<=10) {
  console.log(i3);
  i3++;
}

console.log('문자열');

let str1 = "안녕 쫑이라고 해";
console.log(str1);

console.log('문자열 붙이기');

console.log('안녕'+'쫑이라고해');

let x = '안녕';
let y = '나야';

console.log(x+y);

x +=y;
console.log(x);

let first = '치즈버거 가격은';
let second = 8000;
let third ='원 입니다.';
console.log(first + second + third);

console.log('기타');

console.log('특정 문자들은 앞에 \n백슬래시(\\)를 붙여줘야 합니다.');

console.log('기타2');

let x2 = true;
let y2 = false;

console.log(x2,y2);

console.log(2>1);




