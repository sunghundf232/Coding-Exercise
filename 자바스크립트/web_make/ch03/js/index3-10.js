//Promise 객체

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);})
  .catch((error)=>{console.log(error);})
  .finally(()=>{console.log('나는 쫑이맨');})



//직접 만들어보는 Promise 객체 코드
//자바스크립트 --> new a : 새로운 a 객체 형성
//-->
/*
const 이름 아무거나 = new Promise(
  (
    resolve : 생성될 프로미스 객체를 fulfilled 상태를 만들수 있는 함수로 연결
    reject : 생성될 프로미스 객체를 rejected 상태를 만들수 있는 함수로 연결
  )
} --> executor 함수
);
*/

//ex) resolve
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{resolve('success');},2000)
});

//--> p : 2초후에  fulfilled 상태로 변화 / 여기서 success(문자열) 작업성공 결과가 됨

//--> 성공결과 확인
p.then((result)=>{console.log(result);});

//ex)reject

const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{reject(new Error('fail'));},2000);
});
p.catch((error)=>{console.log(error);});

//--> new Error('fail')) : rejected 상태로 변화 / 여기서 fail(문자열)작업 실패 결과가 됨

