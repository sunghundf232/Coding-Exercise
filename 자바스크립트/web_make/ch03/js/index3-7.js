//promise -> rejected 상태가 될때 실행하려고 하려면?

//--> 잘 작동됬는지 확인하려면? 에러터지게 만들면 됨
/*
1. 인터넷 강제로 끈기 : ex) 와이파이 쓰면 와이파이 꺼!
2. 존재하지 않는 url 주소 넣기
*/

//1.

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text(),(error)=>{console.log(error);})
  .then((result)=>{console.log(result)})



//2.catch 메소드 - then 메소드 약간 변경

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .catch((error)=>{console.log(error);})
  //= .then(undefined,(error)=>{console.log(error);})
  .then((result)=>{console.log(result);});