//위에서 부터 차례대로 

//id , class 로 태그 정리

//1. id 태그 선택하기 - > 딱 하나의 속성을 이용할때
//1)--> document.getElementById('아이디값')

const myTag = document.getElementById('myNumber');
console.log(myTag)

//2)html에 id : btn 이 여러개를 포함
//--> btn 내용에 해당하는거 모두 출력
const myTags = document.getElementById('btns');
console.log(btns)

//3)존재하지 않는값 입력시 = > null 나와
const myTags1 = document.getElementById('Codeit');
console.log(myTags1)

//2.class 태그 여러개 선택 = > document.getElementByClassName

//1)
const myTag1 = document.getElementsByClassName('color-btn');
console.log(myTag1); //배열인 형태(유사배열) 출력
//but 각 요소 접근가능
console.log(myTag1[1]);
console.log(myTag1.length);

for(var tag of myTag1){
  console.log(tag)
}

//2) getElementsByClassName('클레스 1개의 값 접근')

const myTag2 = document.getElementsByClassName('red'); 
// HTMLCollection [button.color-btn.red] 나와

console.log(myTag2); //배열인 형태(유사배열) 출력
//but 각 요소 접근가능

console.log(myTag2[0]); //클레스 1개값 선택시 방 번호 선택
console.log(myTag2.length);

for(var tag1 of myTag2){
  console.log(tag1)
}

//3) 존재하지 않는 className 값 찾기 = > HTML Collection [] 나와
 
//(1)
const myTag3 = document.getElementsByClassName('쫑이'); 
// HTMLCollection [button.color-btn.red] 나와


console.log(myTag3); //배열인 형태(유사배열) 출력
//but 각 요소 접근가능

console.log(myTag3[0]); //클레스 1개값 선택시 방 번호 선택
console.log(myTag3.length);

for(var tag2 of myTag3){
  console.log(tag1)
}

//(2)
myTags2 = document.getElementsByClassName('codeit')
console.log(myTags2 === null);
console.log(myTags2.length);













