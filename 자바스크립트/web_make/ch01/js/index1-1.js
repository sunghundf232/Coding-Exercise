// 리퀘스트 : 웹 브라우저가 서버로 보내는 요청  
// 리스펀스 : 서버가 다시 보내지는 응답

fetch('https://www.google.com')
  .then((response)=> response.text())
  .then((result)=>{console.log(result);});
