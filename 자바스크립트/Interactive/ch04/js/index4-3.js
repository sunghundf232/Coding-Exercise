/** 
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 움직일 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 움직일 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 움직일 때 
 * 
 *  mouseover , mouseout
 * > MouseEvent.target
 * : 이벤트가 발생한 요소
 * 
 * > MouseEvent.relatedTarget
 * : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
 */

//mouseover , mouseout - MouseEvent.relatedTarget 예시 - 이동경로 파악하는데 좋와

/**
 * 1. mouseover : relatedTarget --> target 이동 ; 마우스가 이동하기 직전의 요소
 * 2. mouseout : target --> relatedTarget ; 마우스가 이동한 직후의 요소
 */

const box2 = document.querySelector('#box2');

function printEventData(e) {
  console.log('event:', e.type);
  console.log('target:', e.target);
  console.log('relatedTarget:', e.relatedTarget);
  console.log('------------------------------------');
  if (e.target.classList.contains('cell')) {
    e.target.classList.toggle('on');
  }
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);








/* mouseover , mouseout 활용1
const box2 = document.querySelector('#box2');

function printEventDate(e){
  console.log(e.type);
};

box2.addEventListener('mouseover',printEventDate);
box2.addEventListener('mouseout',printEventDate);
*/


/* mouseover , mouseout 활용2
const box2 = document.querySelector('#box2');

function printEventDate(e){
  if(e.target.classList.contains('cell')){
    e.target.classList.toggle('on')
  }
}

// if문 과 토글 사용시 : mouseover class 추가 , mouseout class 삭제됨

box2.addEventListener('mouseover',printEventDate);
box2.addEventListener('mouseout',printEventDate);
*/
