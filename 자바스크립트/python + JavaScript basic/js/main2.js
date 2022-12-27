// 숫자형 : Number()
// 문자열 : String()
// 불린형 : Boolean()

let x ='3';
let y = '1';

console.log(x+y);

let x2 ='3';
let y2 = '1';

console.log(Number(x2)+Number(y2));

let x3 =20;
let y3 = 5;

console.log(x3+y3);
console.log(String(x3)+String(y3));;

console.log(typeof x3);
console.log(typeof String(x3));

console.log('---');

console.log(Boolean(0));
console.log(Boolean(12));
console.log(Boolean(''));
console.log(Boolean('안녕 나야'));

// '' ,0 : flase , '',0 제외 : true