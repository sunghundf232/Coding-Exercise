//스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

//style 선택
  /**문제점
   * 스타일 우선순위 높아
   * 같은 스타일은 다른 여러 태그에 적용할때 비슷한 코드는 여러개 작성해야 함
   */

//today.children[0].style.text-decoration = 'line-through'; 오류

//여러개 단어를 오류없이 표현할때 카멜표기법 사용
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#ccc'
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#ccc'

//자바스크립트로 style 적용할때 class 이름으로 적용하면 good

  /**자바스크립트로 class 활용
   * className - class 속성 값으로 모두 변경
   * 월래 있던 item 클래스 에서 done  클래스 추가 : classList
   */


//자바스크립트로 class 활용 예시

//1.className
today.children[1].className = 'done'

//2. classList - 클래스 속성값을 유사배열로
//-> 클래스 하나 씩 다뤄
//--> add,remove,toggle 활용

/*
console.log(today.classList);
console.log(today.children[1].classList)
*/

//add
const item = tomorrow.children[1];
//item.classList.add('done');
//여러 개 넣고 싶을때 ','로 구분 item.classList.add('done','쫑이')

//tem.classList.add('done','쫑이') 중복으로 입력시 하나만 실행됨!

//remove
//item.classList.remove('done')

//toggle - 있으면 제거 하고 없으면 추가하기 따라서 클래스 1개만 다뤄
// but 여러개를 입력시 출력x
item.classList.toggle('done',
//true //= add 기능
false //= remove 기능
);
/**
 * className - 통째로 수정
 * classList -  부분적으로 수정
 */
