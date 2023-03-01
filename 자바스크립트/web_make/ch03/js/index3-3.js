// fetch 함수를 사용한 코드, 다시 해석하기

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text()) // <-- fulfiled <-- 성공 <-- fetch(promise -pending) 
  .then((result)=>{console.log(result);});

console.log('End!')  