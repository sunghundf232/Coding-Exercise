// 애로우 펑션

/*
const getTwice = function(number){
  return number *2
};
console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click',function(){
  console.log('button is clicked');
});
*/

//--> 위의 예시를 애로우펑션으로 바꾸기

const getTwice = (number) =>{
  return number *2
};
console.log(getTwice(5));

const but = document.querySelector('#myBtn');

//이름은 마음대로 하지만 id,class값 또띠 적기

but.addEventListener('click',()=>{
  console.log('button is clicked!');
});

console.log('---')

//추가

const getTwice1 = number => number *2;

console.log(getTwice(6))