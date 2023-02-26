// default export -> 모듈파일내에서 한번만 사용 -> 그 이상이 SyntaxError 에서 발생

// ex) default export :  '내가 쫑이시다' -> default 키워드를 통해서 하나의 대상을 익스폴트 하는 방식

// ex) named export : 변수나 함수 이름으로 여러 대상을 익스폴트 하는 방식

/*
1. default export - 모듈파일에서 익스폴트 할 대상이 한개일때 

import * as printJS from './print.js';
import * as membersJS from './members.js';


console.log(printJS.title);
printJS.print(membersJS.title);
printJS.print(membersJS.data);
console.log(membersJS.default);

2. named export - 모듈파일에서 익스폴트 할 대상이 여러개일때
--> but) 이것만 쓸수 없다.

import * as printJS from './print.js';

import {
  default as 쫑이 , 
  title as membersTitle,
  data as membersData
} from './members.js';

또는

import 쫑이 , //--> default export
{
  // named export 
  title as membersTitle,
  data as membersData
} from './members.js';

--> default export or named export 둘중 하나만 쓰는걸로 권장


*/

// //named export - 모듈파일에서 익스폴트 할 대상이 여러개일때
// --> but) 이것만 쓸수 없다.
// --> print.js 에서
/*
export { title ,print} --> {} 안에 여러개 넣어서  (자세한건 print.js 로)
*/

//ex)

// import {
//   default as 쫑이 , 
//   title as membersTitle,
//   data as membersData
// } from './members.js';

// 또는 

import printJS from './print.js'; //<-- import * as printJS from './print.js';
import 쫑이,{
  title as membersTitle,
  data as membersData
} from './members.js';

// 객체 형태
console.log(printJS.title)
printJS.print(membersTitle);
printJS.print(membersData);
console.log(쫑이);



//-->

//1) 장점 - 이름중복 피해

//2) 단점 -  객체 형식으로 활용시 점 표기법으로 해야 하고 모듈파일의 각 대상의 이름 변경 불가