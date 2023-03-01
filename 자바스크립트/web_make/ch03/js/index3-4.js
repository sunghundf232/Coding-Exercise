// Promise Chaining

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text()) 
  .then((result)=>{console.log(result);}); //--> 계속 쓸수 있어

console.log('End!')  

console.log('====')

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text()) 
  .then((result)=>{
    const users = JSON.parse(result);
    return users[0];
  })
  .then((user)=>{
    console.log(user);
    const {address} = user;
    return address;
  })
  .then((address)=>{
    console.log(address);
    const {geo} = address;
    return geo
  })
  .then((geo)=>{
    console.log(geo);
    const {lat} = geo;
    return lat
  })

  .then((lat)=>{
    console.log(lat);
  });

console.log('End!')  

//-->  .then 계속 넣기 : 프로미싱 체이닝

//.then 메소드 : 새로운 프러미싱 객체 리턴

// (처음)then : promise(pending 상태)
/*
 .then((response)=>
 
 ex)

 response.text()) 리턴

 --> then 메소드가 리턴한 promise 객체 : pending 상태 
 --> 나중에 then 메소드로 실행한 콜백함수가 실행되고 콜백에서 어떤값을 리턴하면 then 메소드가 리턴했던 promise 객체가 영향 받아

-> 어떤값을 리턴하느냐 따라 달라져
 1) promise 객체를 리턴하는 경우 : 동일한 작업 성공결과 or  동일한 작업 실패결과

 2) promise 객체가 아닌 값을 리턴하는 경우 
  (1)일반객체 리턴(ex 숫자,문자열,일반객체,...) -> fulfilled(작업성공결과)
*/