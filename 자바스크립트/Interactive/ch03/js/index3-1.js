let btn = document.querySelector('#myBtn');

/*
btn.onclick = function(){
  console.log('Hi Codeit!');
};

/*
const myContent = document.querySelectorAll('#content');
myContent.innerHTML = `<div>Hello</div>`;
myContent.className = `bttons`
*/
/*
btn.onclick = function(){
  console.log('Hi agin!');
}
//--> 값을 할당하는 방식은 기존의 있던 방식을 덮어 쓰는것

/*
//해결책 1 => 추가로 이벤트 입력이나 제거할시 대체하기가 어렵다.
btn.onclick = function(){
  event1();
  event2();
}
*/


function event1(){
  console.log('Hi Codeit!');
};
function event2(){
  console.log('Hi again!')
}

// 해결책2 elem.addEventListener(event, handler)
btn.addEventListener('click', event1());
btn.addEventListener('click', event2);

// 이벤트2 제거 elem.removeEventListener(event, handler) - 등록할때 한 핸들러(함수 이름만 전달하면 됨) 그대로 전달 --> a(); 에러 뜸
/*
btn.addEventListener('click',function(){
  console.log('event3!');
});
btn.removeEventListener('click',function(){
  console.log('event3!');
});
*/
btn.removeEventListener('click', event2);
