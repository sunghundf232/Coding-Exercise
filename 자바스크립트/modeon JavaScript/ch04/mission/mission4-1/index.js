const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];


/*
1. 요소 노드 다루기
요소 노드 만들기: document.createElement('태그이름')
요소 노드 꾸미기: element.textContent, element.innerHTML, ...
요소 노드 추가 혹은 이동하기: element.prepend, element.append, element.after, element.before
요소 노드 삭제하기: element.remove();

2. classList의 유용한 메소드

classList.add ->	클래스 추가하기 :	여러 개의 값을 전달하면 여러 클래스 추가 가능
classList.remove ->	클래스 삭제하기 :	여러 개의 값을 전달하면 여러 클래스 삭제 가능
classList.toggle ->	클래스 없으면 추가, 있으면 삭제하기 :	하나의 값만 적용 가능하고, 두 번째 파라미터로 추가 또는 삭제 기능을 강제할 수 있음

|| :or 연산자 : 한쪽만 true 면 true 출력

//&& : and 연산자 : 두개가 true일때 true 출력

*/


// 여기에 코드를 작성해 주세요.


data.forEach((work,i)=>{
  const li = document.createElement('li');
  /*
  if(work.isClear){
    li.classList.add('item','done')
  } else {
    li.classList.add('item');
  }
  */

  //3항식
  /*
  work.isClear
  ? li.classList.add('item','done') :  li.classList.add('item');
  */

  // 논리 연산자 활용
  li.classList.add('item',work.isClear && 'done')


  li.innerHTML = `${i +1}.${work.title}`;
  list.appendChild(li);
});






