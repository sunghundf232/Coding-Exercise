/*

const title = '젤 귐둥이 쫑이';

function print(value){
  console.log(value)
};

*/

/* index.js

print(title);


// print.js에 있는 title 변수와 print 함수는 index.js 즉 다른 파일에 사용 불가

//--> 해결책 print.js로
*/

// 해결책 변수에 export 붙이기

export const title = '젤 귐둥이 쫑이';

export function print(value){
  console.log(value)
};

//but) 모든 파일에서 적용 x --> 해결책) index.js로

//변수나 함수를 사용하고자하는 파일에서 한번더 모듈  문법으로 불러오기

//index.js

/*
import { title,print} from './print.js'

print(title);
*/
