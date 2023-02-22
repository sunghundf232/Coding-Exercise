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

import { title/*변수 */,print/*함수*/} from './print.js'; /*모듈 파일 경로 작성 */

print(title);

//print.js 있는 :  젤 귐둥이 쫑이 출렴함 