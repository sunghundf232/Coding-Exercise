//catch 메소드 마지막에 써!

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .catch((error)=>{console.log(error);})
  //catch 에러는 잡았는데 뒤쪽 때문에 에러러 출력됨
  .then((result)=>{
    console.log(result);
    throw new Error('test')
  });

// --> 에러 발생 해결책> .catch 메소드는 아래로 내려  

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  //catch 에러는 잡았는데 뒤쪽 때문에 에러러 출력됨
  .then((result)=>{
    console.log(result);
    throw new Error('test')
  })
  .catch((error)=>{console.log(error);});
