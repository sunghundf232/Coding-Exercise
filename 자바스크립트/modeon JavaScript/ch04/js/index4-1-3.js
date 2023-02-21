/* forEach vs map 최종 정리 */

/*
1. forEach : 배열 반복작업

2. map : 배열의 반복작업을 통해서 새로운 배열이 필요할때 
*/

/* 주의 
최대 반복 횟수는 메소드를 처음 호출할때 그 당시 요소 개수
*/

//ex)

//forEach

const members = ['쫑이','귐둥이 쫑이','잘생긴 쫑이','멋진견 쫑이'];

members.forEach((member)=>{
  console.log(`${member}님이 입장하셨습니다.`);
  members.push('나야 나 젤 멋진견 쫑이');
  //반복중인 배열을 추가할때 - 무한루프가 아니라 딱 요소만

  // ex) const members = ['쫑이','귐둥이 쫑이','잘생긴 쫑이','멋진견 쫑이'];

  //여기서 members 안에 4개 요소가 있으니까 다 출력되고
  //+) members.push('나야 나 젤 멋진견 쫑이'); 여기에 나야 나 젤 멋진견 쫑이 4번 더 출력
});
console.log(members)

console.log('===')

//map

const members1 = ['쫑이','귐둥이 쫑이','잘생긴 쫑이','멋진견 쫑이'];

members1.map((member)=>{
  console.log(`${member}님이 입장하셨습니다.`);
  members.push('나야 나 젤 멋진견 쫑이');
  //반복중인 배열을 추가할때 - 무한루프가 아니라 딱 요소만

  // ex) const members = ['쫑이','귐둥이 쫑이','잘생긴 쫑이','멋진견 쫑이'];

  //여기서 members 안에 4개 요소가 있으니까 다 출력되고
  //+) members.push('나야 나 젤 멋진견 쫑이'); 여기에 나야 나 젤 멋진견 쫑이 4번 더 출력
});
console.log(members1)

console.log('===')

//if) 반복 중 배열 길이가 줄어들 경우?

const members2 = ['영훈','윤수','동욱','태호'];

members2.forEach((member)=>{
  console.log(`${member}님이 입장하셨습니다.`);
  members2.pop(); //pop : 배열 마지막 요소 삭제
});

console.log(members2)

//반복 회수도 줄어져 --> (2) ['영훈', '윤수'] 출력

