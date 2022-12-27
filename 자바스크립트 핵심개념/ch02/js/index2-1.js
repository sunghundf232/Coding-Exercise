console.log('10'+'5');
console.log(10+5);

//문자열 변경 : String , 숫자 변경 : Number , 불린 변경 : Boolean



console.log('숫자 -> 문자 변신!') 

let x = 123;

console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('불린 ->문자');

let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

console.log('불린 -> 숫자');

let x2 = '문자'
console.log(x2);
console.log(Number(x2));
console.log(typeof(x2));
console.log(typeof Number(x2));

//Number(true) : 1 , Number(false) : 0

console.log('불린 -> 숫자'); 

let y2 = true;
console.log(y2);
console.log(Number(y2));
console.log(typeof y2);
console.log(typeof Number(y));

//문자 -> 불린

let x3 = '문자'
console.log(x3);
console.log(Boolean(x3));
console.log(typeof(x3));
console.log(typeof Boolean(x3));

console.log('')

//숫자 -> 불린

let y3 = 123;
console.log(y3);
console.log(Boolean(y3));
console.log(typeof y3);
console.log(typeof Boolean(y3));

/** 어떤 값을 불린으로 변신할때 : true 나와 but false로 변신할때
 * 없거나 비어있을떄 : false
 * ex) let x = '' let y = 0; or let y = NaN
 */

/**
 * Boolean 형 변화 : true(보통) , (''),0 , NaN값 : false
 */

console.log(Boolean('false'));
console.log(6%2);