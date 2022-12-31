//css 선택자 태그 선택하기

//1.id값 - 같은 값 나와

const myTag = document.querySelector('#myNumber');
console.log(myTag);

const myTag2 = document.getElementById('myNumber');
console.log(myTag2);

//2.class값

//1)
const myTags = document.querySelector('.color-btn');
console.log(myTags);
//color-btn~ 시작되는것 중 제일 첫빠다놈이 출력됨

//2)여러 요소 선택

const myTags1 = document.querySelectorAll('.color-btn');
console.log(myTags1);

const myTags2 = document.getElementsByClassName('color-btn');
console.log(myTags2);