// JSON = 자바스크립트 문법과 거의 동일
 

fetch('https://www.google.com')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});

// 다른 정보도 볼수 있어 - JSON : 어떤 정보를 나타낼때 사용

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});

  // 변수의 데이터 타입 확인 : typeof
  /*
  ex)
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.text())
    .then((result)=> {console.log(typeof result);});

  */

  // if) 변수 데이터가 string 면 내가 원하는 작업은 할수 없다.

  //ex)
  //1. 사용자 이름만 추출해서 출력하려고 할때 -> 굳이 x --> 그대로 자바스크립트 객체 변환 
