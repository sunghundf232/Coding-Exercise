//for ..in 반복문(객체 안에 있는 문장)

/*
for(변수(마음대로) in 객체){
  동작부분
}
*/

let codeit = {
  name : '코드잇',
  bornYear:2017,
  isVeryYear : true,
  worstCourse: null,
  bestCourse:'자바스크립트 프로그래밍 기초'
};

for(let key in codeit){
  console.log(key);
  console.log(codeit[key]);
};

let myObject = {
  '2':'알고리즘의 정석',
  '3':'컴퓨터 개론',
  '1':'자바스크립트 프로그래밍 기초',
};

for(let key in myObject){
  console.log(key);
  console.log(myObject[key]);
};

let myObject2 = {
  300:'정수',
  1.2:'소수',
};

