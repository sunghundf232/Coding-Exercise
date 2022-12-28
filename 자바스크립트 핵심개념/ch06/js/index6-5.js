//참조형 복사하기

//1. 배열

/*
let numbers1 = [1,2,3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

//numbers1,2 -> 1,2,3,4 같은 값 나와

*/

// 1-1 배열 중 numbers2 번만 변경하고 싶을때

let numbers1 = [1,2,3];
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

//2. 객체

/*
let course1 = {
  title : '파이썬 프로그래밍 기초',
  language : 'Python'
};

let course2 = course1;

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);
*/

// 2-1 배열 중 course2 번만 변경하고 싶을때

/*
let course1 = {
  title : '파이썬 프로그래밍 기초',
  language : 'Python'
};

let course2 = Object.assign({}, course1);

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);

*/

// 2-2 배열 중 course2 번을 for...in문으로 변경하고 싶을때

/*
let course1 = {
  title : '파이썬 프로그래밍 기초',
  language : 'Python'
};

let course2 = {};

for(let key in course1){
  course2[key] = course1[key]; 
}

course2.title = '자료구조';

console.log(course1);
console.log(course2);

*/

// 2-3 배열 중 course1 , course2 이외 값이 더 올때

/*

function cloneObject(object){
  let temp = {};

  for(let key in object){
    temp[key] = object[key];
  }
  return temp;
}





let course1 = {
  title : '파이썬 프로그래밍 기초',
  language : 'Python',
  
};

let course2 = cloneObject(course1);
let course3 = cloneObject(course1);


course2.title = '자료구조';
course3.title = '객체 지향 프로그래밍'

console.log(course1);
console.log(course2);

*/

//2-4 배열 중 기타 풀이

function cloneObject(object){
 // course2에만 파이썬 프로그래밍 기초를 넣고 싶을때

if(object === null || typeof object !=='object'){
  return object;
}
let temp;
if(Array.isArray(object)){
  temp = [];
} else {
  temp = {};
}
for(let key of Object.keys(object)){
  temp[key] = cloneObject(object[key])
}
return temp;
}





let course1 = {
  title : '파이썬 프로그래밍 기초',
  language : 'Python',
  prerequisite : []
  
};

let course2 = cloneObject(course1);
let course3 = cloneObject(course1);


course2.title = '알고리즘의 정석';
course2.prerequisite.push('파이썬 프로그래밍 기초');
//course1에도 파이썬 프로그래밍 기초 추가
//for) course1 배열 안에 넣었고 따라서 주소값이 복사되어 course1에도 파이썬 프로그래밍 기초에 나와

console.log(course1);
console.log(course2);

