// JSON = 자바스크립트 문법과 거의 동일
 

fetch('https://www.google.com')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});

// 다른 정보도 볼수 있어 - JSON : 어떤 정보를 나타낼때 사용

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});