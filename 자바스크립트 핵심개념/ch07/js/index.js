//const,변수와 상수사이

//const 에서 값 추가시 오류발생 - > 해결 : 상수 만들기

let x = 1;
console.log(x);

x = 2;
console.log(x);

const y = 3;
console.log(y);

/*
y = 4;
console.log(y);
*/

/**상수 , 변수 -> const 차이점
 * 1. 변수 : ex) myName
 * 2. 상수 : ex) MY_NAME
 */




const x2 = 3;
let y2 = x +2;

console.log(x);
console.log(y);

const x3 = 4;
console.log(x2);

y2 = x2 * y2;
console.log(y);

const x4 = {name : 'Codeit'};
x.birth = 2017;

console.log(x4);

let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;

team1.splice(2, 1, 'Trumpet');
team2.splice(2, 1, 'Piano');

console.log(team1);
console.log(team2);



