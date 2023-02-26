// default export -> 모듈파일내에서 한번만 사용 -> 그 이상이 SyntaxError 에서 발생

// ex) default export :  '내가 쫑이시다' -> default 키워드를 통해서 하나의 대상을 익스폴트 하는 방식

// ex) named export : 변수나 함수 이름으로 여러 대상을 익스폴트 하는 방식


import * as printJS from './print.js';

/*

import * as printJS from './print.js';
import {
  default as 쫑이 , 
  title as membersTitle,
  data as membersData
} from './members.js';

*/

//default export 할때 특별한 방식으로 코드를 짤수 있따.

/* --> 이거 와 같은 내용
import * as printJS from './print.js';

import {
  default as 쫑이 , 
  title as membersTitle,
  data as membersData
} from './members.js';
*/

/*
import 쫑이 , //--> default export
{
  // named export 
  title as membersTitle,
  data as membersData
} from './members.js';

// but ) default export , named export 두개 사용시 복잡하게 작성된다는 단점
*/

// default export , named export 두개 사용시 복잡하게 작성된다는 단점 해결
//-->
import * as membersJS from './members.js' // 와일드 카드 추가 -> 단점) 원하지 않는것도 다 온다.
// 불필요 잘 활용되지 않아


console.log(printJS.title);
/*
printJS.print(membersTitle);
printJS.print(membersData);
console.log(쫑이);
*/
printJS.print(membersJS.title);
printJS.print(membersJS.data);
console.log(membersJS.default)



/*
1. default export - 모듈파일에서 익스폴트 할 대상이 여러개일때 

import * as printJS from './print.js';
import * as membersJS from './members.js';


console.log(printJS.title);
printJS.print(membersJS.title);
printJS.print(membersJS.data);
console.log(membersJS.default);

2. named export - 모듈파일에서 익스폴트 할 대상이 한개일때

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

둘중 하나만 쓰는걸로 권장


*/