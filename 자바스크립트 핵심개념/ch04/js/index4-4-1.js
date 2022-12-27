let myObject = {
  300: '정수',
  1.2: '소수',
};

for(let key in myObject){
  console.log(`${key}의 자료형은 ${typeof key}입니다.`)
};

/*
let myObject2 = {
  400: '정수',
  1.5: '소수',
};

console.log(myObject2['300']);
console.log(myObject2['1.2']);
console.log(myObject2.400); //에러떠 myObject2에 없어서
console.log(myObject.1.5);//에러떠 myObject2에 없어서

*/
let myObject3 = {
  3: '정수3',
  name:'jsh',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
}

for(let key in myObject3){
  console.log(key);
}