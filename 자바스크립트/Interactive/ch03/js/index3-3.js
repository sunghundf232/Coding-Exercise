const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

/*
myInput.addEventListener('keydown',function(){
  console.log('keyboardEvent');
});
myBtn.addEventListener('click',function(){
  console.log('MouseEvent')
});
*/
function printEvent(event /*또는 e*/) {
  console.log(event);
	event.target.style.color = 'red';
  //이벤트가 발생했을때 해당 요소 수정이나 속성값을 참조할때 유용해
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);
