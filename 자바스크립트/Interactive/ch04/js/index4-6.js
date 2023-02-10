// Scroll 이벤트 - widow 객체를 활용함

/*
function printEvent(e){
  console.log(e);
  console.log(window.scrollY);
  //scrollY : 스크롤 발생했을때 웹문서의 윗쪽에서 부터 몇 픽셀 했는지 파악가능
};

window.addEventListener('scroll',printEvent)
*/


/*
// 특정한 기준을 가지고 돔 요소를 다룰수 있다.

function printEvent(e){
  const stand = 30;

  const nav = document.querySelector('#nav');
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > stand) { // 스크롤이 30px을 넘었을 때
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else { // 스크롤이 30px을 넘지 않을 때
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  } 
}

window.addEventListener('scroll',printEvent);

*/

// Scroll 이벤트
let lastScrollY = 0;

function printEvent(e) {
  const nav = document.querySelector('#nav');
  const toTop = document.querySelector('#to-top');
  const STANDARD = 30;
  
  if (window.scrollY > STANDARD) { // 스크롤이 30px을 넘었을 때
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else { // 스크롤이 30px을 넘지 않을 때
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  } 

	if (window.scrollY > lastScrollY) { // 스크롤 방향이 아랫쪽 일 때
    nav.classList.add('lift-up');
  } else { // 스크롤 방향이 윗쪽 일 때
    nav.classList.remove('lift-up');
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', printEvent);