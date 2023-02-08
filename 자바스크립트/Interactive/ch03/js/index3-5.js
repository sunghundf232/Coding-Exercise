// 이벤트 위임 (Event Delegation) - 새로운 자식요소 추가 삭제시 이벤트에 대한 제어를 신경쓰지 않아도 됨
const list = document.querySelector('#list');

/*
for(let item of list.children){
	item.addEventListener('click',function(e){
		e.target.classList.toggle('done')
	});
};
*/

//버블링 해결책 : 5~9번라인처럼 각각 등록하는것이 아니라 그 태그에 부모요소를 넣고 하면 끝

list.addEventListener('click',function(e){
	//if(e.target.tagName ==='LI') tagName --> 해당요소 대문자로 적기

 //또는
 //contains : 포함한다 의미
 if(e.target.classList.contains('item')){
	e.target.classList.toggle('done')
 }
})

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);

//문제점 : 이벤트가 추가 되면 추가된것은 이벤트가 작동하지 않는다.

//지금까지 한것의 문제점 : 원하는 태그 말고 태그 범위 밖을 클릭하면 전체가 줄긋기 됨
//따라서 원하는 부분에 의도한 동작이 될수 있게끔 처리됨 
//해결책 : 15번 라인으로 고~

/* 버블링 막는것은 최소화 시키기
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기쓰기';
list.append(li);
li.addEventListener('click',function(e){
	e.stopImmediatePropagation();
})
*/

