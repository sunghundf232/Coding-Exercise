// 지금까지 promise 객체 --> fulfilled

// console.log('Start!')

// fetch('https://jsonplaceholder.typicode.com/users') //promise

//   //promise 객체

//   .then((response)=>response.text())
//   .then((result)=>{
//     const users = JSON.parse(result);
//     return users[0];
//   })
//   .then((user)=>{
//     console.log(user);
//     const {address} = user;
//     return address
//   })

/* promise
pending
  1. 작업 성공 결과 : fulfilled
  2. 작업 실패정보 : rejected

*/

//rejected 상태가 되면 실행할 콜백

/*
1. 첫번째 콜백 
  ex) .then((a)=>a.text(), : fulfilled 상태가 되면 실행
  
2. 두번째 콜백  : 이름은 아무거나 but) 작업 실패 결과니 : error 넣어
  .then(error )=>{console.log(error );}) : rejected 상태가 되면 실행
  --> 설정 : then 메소드의 두번째 파라미터로 원하는 콜백 넣기
*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text(),(error)=>{console.log(error);})
  .then((result)=>{console.log(result);});

/* 실패 확인하기 : 에러떠
1. 인터넷 끈기 
*/

//--> reject 상태가 되면 해당 콜백은 작업 실패 정보가 파라미터로 넘어온다.