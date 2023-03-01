//fetch 함수는 Promise 객체 리턴

//promise - 작업에 관한 상태정보를 갖는 객체

/* promise 종류
1. pending - 진행중
2. fulfilled - 작업 성공
3. rejected - 작업 실패

*/

console.log('Start!'); //1

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{connsole.log(result);});
//--> then : 콜백 등록(실행x)

//-> 2

console.log('End!') //3

//출력순서 : 1 -> 3 -> 2

// 비동기 실행 : 시작된 작업이 완료되기전에 바로 다음 코드로 실행이 넘어가고 넘어간 부분을 나중에 실행하는 것

//1. promise

console.log('Start!'); //1

fetch('https://jsonplaceholder.typicode.com/users')
// fetch 함수가 리턴한 promise 객체 : pending 상태 -> (이상없으면)fulfilled : promise객체 -> 작업 성공 결과도 가져(작업성공결과)
//                                                -> (이상있으면)rejected  :             -> 작업 실패이유 가져(작업실패정보)
  .then((response/*작업 성공결과에 해당 : 작업성공 결과*/)=>response.text())
  .then((result)=>{connsole.log(result);});
//--> then : 콜백 등록(실행x)

//-> 2

console.log('End!') //3