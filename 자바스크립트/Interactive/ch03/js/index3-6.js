// 브라우저의 기본 동작 - 발생하는 순간 태그 별 문서 전체별로 동작들을 수행
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

//동작들을 원하지 않을때 예를들어 블로그 에서 마우스 오른쪽 클릭하면 모달 창 안떠
// 따라서 이러한 기본 동작을 막고 싶을때

//e(event).preventDefault 활용

//실습 - 이 문제처럼 link 클릭시 그 링크 사이트로 들어가지 못하게 막어

//1. 모달창 띄우기
link.addEventListener('click',function(e){
  e.preventDefault();
  alert('체크 못함');
});

//2. 특정한 상황에서만 하기  - 체크박스 클릭 않하면 검색 못하게
input.addEventListener('keydown',function(e){
  if(!checkbox.checked){
    e.preventDefault();
    alert(' 체크박스 눌러주세요');
  };
});

//마우스 오른쪽 클릭 방지 ? contextmenu 활용

//text 있는곳만 활용할때 text ,  문서 전체시 ? document
document.addEventListener('contextmenu',function(e){
  e.preventDefault();
  alert('오른쪽 키 사용불가.')
})