//대소문자 상관없어

//HTML

const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

//해당 태그에 모든 속성에 접근 => getAttribute('속성');

console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));
//class 속성은 getAttribute이거는 class 주고 나머지는 
//className 넣어


//setAttribute(속성,값) : 속성 추가(수정)하기
tomorrow.setAttribute('class','list');
link.setAttribute('href','http://www.codeit.kr');

//해당 속성 제거하기 => removeAttribute

tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class')


/*
//id 속성
console.log(tomorrow);
console.log(tomorrow.id);

//class속성
console.log(item);
console.log(item.className)

//href 속성
console.log(link);
console.log(link.href);
*/

/**속성 정리
 * 속성에 접근하기: element.getAttribute('속성')
  속성 추가(수정)하기: element.setAttribute('속성', '값')
  속성 제거하기: element.removeAttribute('속성')

* document.querySelector('css선택자')는 css 선택자로 HTML 태그를 선택하는 메소드입니다.
element.firstElementChild는 element에 선택된 태그에 첫 번째 자식 요소 노드를 선택하는 프로퍼티입니다.
document.createElement('태그이름')는 파라미터로 전달받은 태그 이름의 요소 노드를 생성해주는 메소드입니다.
element.setAttribute('속성', '값')는 element에 선택된 태그의 속성에 값을 추가하거나 수정하는 메소드입니다.
element.textContent는 element에 선택된 태그 내부의 텍스트 정보만 문자열로 가져오는 프로퍼티입니다.
element.innerHTML은 element에 선택된 태그 내부의 HTML 정보를 문자열로 가져오는 프로퍼티입니다.
element.outerHTML은 element에 선택된 태그 자체의 HTML 정보를 문자열로 가져오는 프로퍼티입니다.

 */