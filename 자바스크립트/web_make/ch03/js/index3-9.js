//finally 메소드 - 정상이든 최악이든 상관없이 무조건 실행해야하는 코드가 있으면 good ex) 

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);})
  .catch((error)=>{console.log(error);})


//finally 메소드 - 성공하든 실패하든 상관없이 꼭 실행하고자 할때 사용(catch 밑에 사용)

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);})
  .catch((error)=>{console.log(error);})
  .finally(()=>{console.log('나는 쫑이맨');})

  //finally 메소드 - 성공하든 실패하든 상관없이 꼭 실행하고자 할때 사용(catch 밑에 사용) --> 확인용

  fetch('https://jsonplaceholder.typicode.coㅍm/users')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);})
  .catch((error)=>{console.log(error);})
  .finally(()=>{console.log('나는 쫑이맨');})

  //--> 결과)catch 메소드 콜백 실행 but) catch 메소드가 리턴했던 프로미스 객체가 fulfilled 상태가 되고 undefined 작업 성공결과로 얻어 


  // catch 메소드가 리턴한 프로미스 객체를 rejected 상태를 만들기 위해서 catch 메소드 안에서 에러 발생시키기

fetch('https://jsonplaceholder.typicode.coㅍm/users')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);})
  .catch((error)=>{
    throw new Error('from catch method')
  })
  .finally(()=>{console.log('안녕 나는 젤귀 쫑이라고 해');});

  //finally문은 실행 되었고 catch문은 실행이 되지 않고 에러뜸