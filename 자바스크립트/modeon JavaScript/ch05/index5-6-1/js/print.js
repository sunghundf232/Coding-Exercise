const title = '나는 세상에서 젤 귀요미 쫑이시다.';

function print(value){
  console.log(value);
}

// 2. named export - 모듈파일에서 익스폴트 할 대상이 여러개일때
// --> but) 이것만 쓸수 없다.

//1) 해결책 -> export{a,b,c,.... 넣어서 해결}
//export { title ,print};

// 2) default 넣어서 해결

export default  {title,print} // {} -> 객체로 평가되는 중괄호
// = {title : title , print : print}

//==> index.js
//->import * as printJS from './print.js'; 대신에 
//->

//import * printJS from './print.js'; 가능