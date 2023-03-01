//fetch 함수와 비동기 실행

console.log('Start!'); //1

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{connsole.log(result);});
//--> then : 콜백 등록(실행x)

//-> 2

console.log('End!') //3

//출력순서 : 1 -> 3 -> 2

// 비동기 실행 : 시작된 작업이 완료되기전에 바로 다음 코드로 실행이 넘어가고 넘어간 부분을 나중에 실행하는 것