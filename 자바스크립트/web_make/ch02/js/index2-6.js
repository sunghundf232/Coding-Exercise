/*
데이터 조회 -> GET --> GET Request
데이터 추가 -> POST --> POST Request
데이터 수정 -> PUT--> PUT Request
데이터 삭제 -> DELETE --> DELETE Request
*/

//1. GET Request

//1) 전체직원

fetch('https://learn.codeit.kr/api/members')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);});

//2)특정직원   - > id값 번호 붙여

 fetch('https://learn.codeit.kr/api/members/3')
  .then((response)=>response.text())
  .then((result)=>{console.log(result);});

//2. POST Request -> request body에 넣기
const newMember = {
  name:'Jung',
  email:'쫑이 귀여움@naver.com',
};

fetch('https://learn.codeit.kr/api/members',{
  //옵션 객체 <-- 객체의 아규먼트로 추가 (request 관한설정을 적는 객체)
  method:'POST',
  body:JSON.stringify(newMember),
  //parse : string객체 json 데이터를 자바스크립트 객체로 변신  ,
  //stringify : 자바스크립트 객체를 string 객체 json 데이터로 변신

  //--> stringify : 자바스크립트 객체가 담고 있는 정보를 외부에 전송하고 싶을때 -> string 타입의 json데이터로 로 변신해
})
  .then((response)=>response.text())
  .then((result)=>{console.log(result);});

//3. PUT Request - 기존 데이터 수정
//ex) 직원 한명이 a->b 부서로 이동

const member = {
  name: 'Alice',
  email:'alice@codeitmall.kr',
  department:'marketng'
}




fetch('https://learn.codeit.kr/api/members/2',{
  method:'PUT',
  body:JSON.stringify(member),
})
  .then((response)=>response.text())
  .then((result)=>{console.log(result)})





