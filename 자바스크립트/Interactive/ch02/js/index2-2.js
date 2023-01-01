//DOM 이용하기

const myTag = document.querySelector('#list-1');
console.log(myTag);

console.log('기타')
//기타
console.log(myTag.parentElement.nextElementSibling);


console.log('형제요소');
//1. 형제요소
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);






console.log('부모요소');
//2. 부모요소
console.log(myTag.parentElement);




console.log('자식요소')
//3. 자식 요소 
//ocnsole.log(myTag.children) - > #content id값의 자식들 요소가 나와
console.log(myTag.children[1]); //자식요소 중 방번호를 알수 있음

console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);
