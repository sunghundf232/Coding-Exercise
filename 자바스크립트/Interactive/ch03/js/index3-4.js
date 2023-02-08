// 이벤트 버블링 (Event Bubbling) - 지워지지 않고 좀비처럼 계속 살아 있는경우

//--> 하나의 요소에 이벤트 발생시 요소에 할당된 이벤트가 동작하고 같은 타입에 한해서 부모요소같이 try된다. 따라서 최상단의 부모에 한해서 동작 최상단의 윈도우 객체가 만나기 전까지 발생 자식에서 부모요소까지 동작함

//but ) 이벤트 객체의  이벤트 별로 타겟을 같이 출력하면 등록된 요소가 이벤트 타겟이 된다고 오해 하지만 타겟은 변하지 않아 
//따라서 부모요소에 최초 이벤트가 발생한 위치 파악 따라서 처음 이벤트가 발생한 시작점 담고 있어
//이벤트 타겟 입력시 태그 중 하나만 클릭해도 클릭한 태그만 출력됨

//실행중이 할당된 요소(이벤트 핸들러가 등록된 요소에 접근하려면?) e.currentTarget
//따라서 태그가 전체 나와

//최종 버블링 해결책?
// 이벤트 객체에 e 또는 event.stopPropagation(); 사용
// 사용하면 원하는 태그 클릭시 그 태그만 출력됨 하지만 다른걸 클릭하면 전체 출력됨


const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e) {
  console.log('content Event');
  console.log(e.currentTarget);
});

title.addEventListener('click', function(e) {
  console.log('title Event');
  console.log(e.currentTarget);
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  console.log(e.currentTarget);
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
    console.log(e.currentTarget);
		e.stopPropagation(); //버블링을 멈추는 방법
  });
}