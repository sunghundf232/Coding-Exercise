// 에러와 여러 객체


//에러가 발생한 그순간 이 프로그램은 멈춘다.

// 의도적으로 에러 만들기 - name(에러 객체 이름) , message(내용) 형식을 맞추면 가능

console.log('시작');


//에러 객체를 함수 처럼 호출
const error = new TypeError('타입 에러가 발생'/*아규먼트 */);

/*
console.log(error.name); //TypeError
console.log(error.message); //타입 에러가 발생

//에러 객체를 만든것이니 발생시킨것은 아님

console.log('끝')
*/

//에러 객체를 활용해서 에러 객체를 발생시키기

//1. throw 객체 활용  - 에러 발생한 기점 이후에는 발생하지 않아

throw error;

console.log(error.name); //TypeError
console.log(error.message); //타입 에러가 발생






