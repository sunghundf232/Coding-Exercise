fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.text())
  .then((result)=>{console.log(result)})