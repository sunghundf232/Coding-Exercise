//forEach 와 map


const members = ['귐둥이 쫑이', '잘생긴 쫑이', '젤귀 견 쫑이', '먼진견 쫑이'];

//반복문 동작할때 for--of문 사용

for (let member of members) {
  console.log(`${member}님이 입장 하셨습니다.`)
}

console.log('===')

//1. forEach - 아규먼트로 콜백함수 작성 -> 첫번째 파라미터로 배열의 요소를 순서대로 하나씩 전달

/*
a.forEach(function(b : 배열요소(꼭 필요), index = i : 요소 인덱스:방번호 ){

 1) console.log(`${b}님이 입장 하셨습니다.`)

 2) console.log(`${i} ${b}님이 입장 하셨습니다.`)

  --> 방번호 b

  = a.forEach((b : 배열요소(꼭 필요), index = i : 요소 인덱스:방번호 , arr: 반복적인 배열 자체)=>{

    1) console.log(`${b}님이 입장 하셨습니다.`)

    2) console.log(`${i} ${b}님이 입장 하셨습니다.`)
    -->  방번호 b
    
  });

  ex) index = i : 다른배열과 함께 활용시 같은 인덱스 요소 매칭할때도 사용

  --> 예시

  const firstName = ['영훈','윤수','동욱','태호'];
const lastName = ['강','이','손','성'];

firstName.forEach((firstName,i)=>{
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`)
})

// 출력
강영훈님이 입장했습니다.
이윤수님이 입장했습니다.
손동욱님이 입장했습니다.
성태호님이 입장했습니다.

});

ex) arr: 반복적인 배열 자체

예시) 변수이름 (firstName)의 배열을 호출

firstName.forEach((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`);
  console.log(arr);
});

//출력

(4) ['영훈', '윤수', '동욱', '태호']

(4) ['영훈', '윤수', '동욱', '태호']

(4) ['영훈', '윤수', '동욱', '태호']

(4) ['영훈', '윤수', '동욱', '태호']

*/




/*
members.forEach(function(member){
  console.log(`${member}님이 입장 하셨습니다.`)
});
*/

/*--> member : 파라미터 */

// 유사

members.forEach((member) => {
  console.log(`${member}님이 입장 하셨습니다.`)
});

console.log('===')

members.forEach((member, i) => {
  console.log(`${i}${member}님이 입장 하셨습니다.`)
});

console.log('===')

const firstName = ['영훈', '윤수', '동욱', '태호'];
const lastName = ['강', '이', '손', '성'];

firstName.forEach((firstName, i) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`)
});

console.log('===');

firstName.forEach((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`);
  console.log(arr);
});

console.log('====');

['영훈', '윤수', '동욱', '태호'].forEach((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`);
  console.log(arr);
});

/*
firstName.forEach((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`);
  console.log(arr);
});
이거랑 같은 값이 출력됨
*/


