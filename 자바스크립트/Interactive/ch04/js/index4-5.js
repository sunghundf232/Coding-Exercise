/**
 * [input 태그 다루기]
 *  
 * > 포커스 이벤트
 * focusin: 요소에 포커스가 되었을 때
 * focusout: 요소에 포커스가 빠져나갈 때
 * focus: 요소에 포커스가 되었을 때 (버블링 x)
 * blur: 요소에 포커스가 빠져나갈 때 (버블링 x)
 * 
 * > 입력 이벤트
 * input: 사용자가 입력을 할 때
 * change: 요소의 값이 변했을 때 / 입력후 엔터할때
 */


const el = document.querySelector('#form');

function printEventType(e) {
  console.log('type:', e.type);
  console.log('target:', e.target);
  console.log('---------');
}

/*
const el = document.querySelector('#username');
//38~39번줄이 실행 되려면 구체적이고 포커스가 가능한 부분(id,class값에 한해서)에 입력하면 실행됨

function printEventType(e) {
  console.log('type:', e.type);
  console.log('target:', e.target);
  console.log('---------');
}
*/
el.addEventListener('focusin', printEventType); //해당 input에 클릭시 출력
el.addEventListener('focusout', printEventType); // 해당 input 제외 클릭시 출력

/*
el.addEventListener('focus', printEventType); // 해당 input클릭시 출력안됨 (버블링 x) 
el.addEventListener('blur', printEventType); // 해당 input 제외 클릭시 출력안됨 (버블링 x)
*/
el.addEventListener('input', printEventType);
el.addEventListener('change', printEventType);