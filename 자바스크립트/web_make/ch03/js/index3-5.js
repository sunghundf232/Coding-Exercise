// Promise Chaining - 비동기 작업시 더 깔끔하게 코드 작업하기 위해서

//--> 계속해서 then 붙여 깔끔하게 정리할수 있따. 

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

// 주석처리 된거 말고 코드는 다 같은 내용
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{
    const users = JSON.parse(result);
    const user = users[0];
    console.log(user);
    const {address} = user;
    console.log(address);
    const {geo} = address;
    console.log(geo);
    const {lat} = geo;
    console.log(lat);
  });

  console.log('End!')

  console.log('===')

  // Promise Chaining - 비동기 작업시 순차적으로 실행하려고 할때 더 깔끔하게 코드 작업하기 위해서

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{
    const users = JSON.parse(result);
    const {id} = users[0];
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response)=>response.text())
      .then((post)=>{
        console.log(post);
      });
  });

  console.log('End!')

  // 이렇게 해도 실행됨

  console.log('Start!')

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.text())
    .then((result)=>{
      const users = JSON.parse(result);
      const {id} = users[0];
      return  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    })
    .then((response)=>response.text())
    .then((posts)=>{
      console.log(posts);
    });

    console.log('End')
