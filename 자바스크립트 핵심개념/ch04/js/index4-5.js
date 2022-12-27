//Date

let myDate = new Date();
console.log(myDate);

//new Date(특정한 값) -> 특정한 값에 원하는 날짜 기입 하면 출력됨

//new Date(milliseconds)
let myDate2 = new Date(1000); //1천에 1초
console.log(myDate2);
//-> 1970년 1월 1일  09:00:00시간에 1초 지난 시점으로 09:00:01 나와

//문자열 넣고 해당 날짜 객체 생성

//new Date('YYYY-MM-DD')
let myDate3 = new Date('2022-12-23');
console.log(myDate3);

//정확한 시간도 넣기

let myDate4 = new Date('2022-12-23T19:11:16')
console.log(myDate4);

//소괄호 안에 여러개 넣기
// new Date(YYYY(년도),MM(월),DD(일),hh(시),mm(분),ss(초),ms(밀리언초))
//년도,월 필수! 
//년도,월 제외 생략 할때 => new Date(YYYY,MM,1,0,0,0,0)

let myDate5 = new Date(2017,4,18,19,11,16);
let myDate6 = new Date(2017,4,18,19,11);
let myDate7 = new Date(2017,4,18,19);
let myDate8 = new Date(2017,4,18);
let myDate9 = new Date(2017,4);

console.log(myDate5);
console.log(myDate6);
console.log(myDate7);
console.log(myDate8);
console.log(myDate9);

//MM(월) : 시작 숫자 '0' => 1월은 컴퓨터에는 0월
//따라서 MM(월):4월이 면 출력은 5월로 나와

//getTime()
//예제1
let myDate10 = new Date(2017,4,18,19,11,16);
console.log(myDate10.getTime()); //1495102276000
//1970년 1월 1일 09:00:00 부터 몇 밀리초가 지났는지 나와 => 타임스탬프

//예제2

//Date.getTime();

let myDate11 = new Date(2017,4,18,19,11,16);
let today = new Date();

let timeDiff = myDate11.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

//예제3

//Date.getTime()

let myDate12 = new Date(2017,4,18,19,11,16);

console.log(myDate12.getFullYear()); //2017
console.log(myDate12.getMonth()); //4
console.log(myDate12.getDate()); //18 : 일자
console.log(myDate12.getDay()); // 4 : 요일 -> 일요일 부터 0 ~ 6까지
console.log(myDate12.getHours()); // 19
console.log(myDate12.getMinutes()); //11
console.log(myDate12.getSeconds()); //16
console.log(myDate12.getMilliseconds()); //0

let today1 = new Date();
console.log(today1.getDay()); //5 : 금요일


