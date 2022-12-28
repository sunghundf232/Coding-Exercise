
let x = 3;
let y = x;

console.log(x);
console.log(y);

y=5;
console.log(x);
console.log(y);

console.log('기타');

let x2 = {name : 'Codeit'};
let y2 = x2;

console.log(x2);
console.log(y2);

y.birth = 2017;

console.log(x2);
console.log(y2);

let x3 = [1,2,3];
let y3 = x3;

console.log(x3);
console.log(y3);

y3[2] = 4;

console.log(x3);
console.log(y3)

//---> y에 다른 변수를 기입해도 x,y 똑같이 나와

/*
index6-4.js:5 3
index6-4.js:6 3
index6-4.js:9 3
index6-4.js:10 5

index6-4.js:17 {name: 'Codeit'}
index6-4.js:18 {name: 'Codeit'}
index6-4.js:22 {name: 'Codeit'}
index6-4.js:23 {name: 'Codeit'}
index6-4.js:28 (3) [1, 2, 3]
index6-4.js:29 (3) [1, 2, 3]
index6-4.js:33 (3) [1, 2, 4]
index6-4.js:34 (3) [1, 2, 4]
*/

//실습

let x4 = 'Codeit';
let y4 = x4;

y4 = x4 + '!';
x4 = y4.toLowerCase();

console.log(y4);

let x5 = ['Kim', 'Na', 'Park', 'Lee'];
let y5 = x5;

y5.push('Lim');
x5[4] = 'Sung';

console.log(y5);

let x6 = {
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
let y6 = x6.numbers;
let z = x6.title;
 
x6.numbers.unshift(5);
x6.title = 'Hello';

console.log(y6);
console.log(z);

//참조형 복사하기

let numbers1 = [1,2,3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);
//-> numbers1,2 같은 값 1,2,3,4 나와



