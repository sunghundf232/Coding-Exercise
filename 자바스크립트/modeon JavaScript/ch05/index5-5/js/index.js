//모듈 문법

//한꺼번에 다루기(import) --> * (와일드카드 문자)

//모듈 파일 임포트 할때 파일에서 익스폴트 하는 대상을 모두 가져올 필요 없다. --> 파일에서 사용하는것만 임포트 하면 됨

//import {title as printTitle,print} from './print.js';

/*
//-> 따라서 사용할것만 가져오면 됨
import {print} from './print.js';
import {title,data as memebers} from './members.js';
*/

//print.js

/* 임포트 대상 2개

export const title = '젤 귐둥이 쫑이';

export function print(value){
  console.log(value)
};

*/
 
// 모듈파일에서 익스폴트 하는 대상이 많고 다른 파일에서 임포트 할때도 그 대상들을 모두 불러온다면 코드가 많아지고 가독성 떨어져 심지어 이름까지 바꿔야 된다면 최악

/* ex)
import {
  title as printTitle,
  print as consolePrinter
} from './print.js';

import {
  title as membersTitle,
  data as membersData
} from './members.js'

print(title);
print(members);
*/

//--> 코드 복잡

//모듈파일에서 익스폴트 하는 한꺼번에 임포트 하는 방법 --> '*' 활용

import * as printJS/*이름은 마음대로 */  from './print.js';

import {
  title as membersTitle,
  data as membersData
} from './members.js'

// 객체 형식으로 사용 가능

console.log(printJS.title);
printJS.print(membersTitle);
printJS.print(membersData)

// * 활용 : 모듈파일에서 여러개 변수나 함수를 가지고 올때 간결하게 가져올수 있고 프로포티 형식으로 값을 불러와 이름을 중복될일 없다.

//but) 모듈파일에서 익스폴트 하는  대상을 하나의 객체로 모으는것이어서 필요하지 않는것도 불러온다
