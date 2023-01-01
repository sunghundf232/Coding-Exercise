//요소 노드 주요 프로퍼티

const myTag = document.querySelector('#list-1');

//innerHTML

//1.
console.log(myTag.innerHTML); //list-1의 안에 내용만 출력

/*
//2. 해당 요소 수정
myTag.innerHTML = //예시처럼 list-1 내용이 Exotic 이거 하나만 출력
 `
  <li>Exotic</li>
`;
*/

/*
//3. list-1 중 마지막 요소를 추가

myTag.innerHTML +=  `
<li>Exotic</li>
`;
*/


//outerHTML - 해당 요소를 포함한 전체 요소 출력
//1.
console.log(myTag.outerHTML);

/*
//2. 새로운 값 할당 - 처음 선택한 요소는 사라짐

myTag.outerHTML = `
  <ul id="new-list">
    <li>Exotic</li>
  </ul>
`;
*/

//textContext = innerHTML 유사
//--> 요소안에 있는 내용중 text만 가져와 -> 요소안에 있는 내용 수정
//특수문자 --> text로 처리

console.log(myTag.textContent);
myTag.textContent = `
  <li>new text!</li>
`;

