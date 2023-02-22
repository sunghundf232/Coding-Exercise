// 모듈 문법

/* print.js

const title = '젤 귐둥이 쫑이';

function print(value){
  console.log(value)
}

*/


//print(title);


// print.js에 있는 title 변수와 print 함수는 index.js 즉 다른 파일에 사용 불가

//--> 해결책 print.js로


//but) 모든 파일에서 적용 x 

//import { title/*변수 */,print/*함수*/} from './print.js'; /*모듈 파일 경로 작성 */

//if) 파일안에 타이틀 변수 필요 ? but)이미 모듈파일에서 사용하는 이름이 있어서 출력시 에러떠

//const title = '쫑이';

//타이틀이라는 이름을 피해서 변수 선언

//but) 타이틀 이름이 파일내에서 꼭 필요할수 있따. 
//-> 중복되지 않게 임포트 하는  변수 나 함수 이름에 변경하기

//ex)

/*
import {
  title as  변경하고자 하는 title - > 파일내에서 사용할수 있는 title 변경 가능,
  print as ,
} from './print.js';
*/
//-->  print.js 불러온 title이 index.js 변경하고자 하는 title 이름으로 사용

import {title as 쫑이맨 ,print} from './print.js';

// 문제) 일반적인 변수 이름 중복될 가능성 있어

//ex)

//import {title as dog , data} from './members.js'

//--> 1. 해결책 as 키어드로 이름 변경 하면 에러 안떠

// --> 2. 해결책 - 어떤 의도에 따라 이름 변경하기

//import {title,data} from './members.js'
//--> members.js : data 이름으로 익스포트 함

//--> index.js는 구체적인 이름을 부여여하기 위해 as 를 활용해 주고 싶은 이름 주기
import {title,data as mb} from './members.js'












//--> 에러가 사라지고
// index.js에서 선언한  '나는야 젤 귀여분 쫑이' 출력

//const title = '나는야 젤 귀여분 쫑이'

print(title);
print(mb)

//print.js 있는 :  젤 귐둥이 쫑이 출렴함 

/* 정리 
1. 모듈 파일에서 익스포트 하는 이름을 가져오기
2. 왼쪽 작성 as 바꿀 이름

--> ex)
import {title(이름) as 쫑이맨(이름변경) ,print} from './print.js(익스포트한 js';
*/