//Spread 구문 - 배열을 다룰때 유용하게 활용 - 각각 개별값으로 펼치기

//--> 하나로 묶어 있는 배열을 각각 펼치기
//배열에서 유용하게 활용 - 배열을 펼리하게 복사 가능

//주의) 자체가 값이 아니라 각각 매칭되는 상황이라 가능

const numbers = [1,2,3]
console.log(numbers)

//배열 말고 위에 예시처럼 1,2,3 나오게 하기

const numbers1 = [1,2,3];
console.log(...numbers1)
console.log(1,2,3)
//--> 같은 결과 값나와

//... 사용 문법 - rest 파라미터 - 여러개 파라미터를 하나의 파라미터로 묶는 방식

const sumAll = (...args)=>{
  let sum=0;
  for(arg of args){
    sum+=arg;
  }
  return sum;
}
console.log(sumAll(1,2,3,4)) //1~4 더한값 10 나와

console.log('---')

//Spread 구문 - 배열을 다룰때 유용하게 활용 - 각각 개별값으로 펼치기
//--> 하나로 묶어 있는 배열을 각각 펼치기
//배열에서 유용하게 활용 - 배열을 펼리하게 복사 가능

console.log('---')

// 객체 타입의 값 - 주소값 참조

const webPublishing = ['HTML','CSS'];
//const interactiveWeb = webPublishing.slice();
const interactiveWeb = [...webPublishing,'나야나 젤 잘쌩긴 쫑이'];

//interactiveWeb.push('나는야 귐둥이 쫑이');

//--> webPublishing, interactiveWeb => '나는야 귐둥이 쫑이' 추가

//해결책 -> push넣은 태그에 slice()값 넣어서 배열 복사하면 push값 넣은 태그에만 추가됨

//but) slice() 메소드 활용하지 않고도 Spread(...)값 넣으면 push 넣은 값에만 복사 가능

//부분 문자열 접근 slice(start,end 직전까지 );
//부분 문자열 접근 slice(start); 시작지점부터 끝까지
//부분 문자열 접근 slice(); 문장 전체 

//Spread 구문에 push 구문을 사용하지 않고도 가능

console.log(webPublishing);
console.log(interactiveWeb);

console.log('---')

//Spread 구문 - 여러 배열을 합칠때도 가능

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];
console.log(arr3);

console.log('---')
//배열을 합칠때 : concat 활용도 가능

const arr4 = arr1.concat(arr2);
console.log(arr4);

console.log('---')

//Spread - 함수 호출시 아규먼트도 활용 가능

const introduce = (name,birth,jop)=>{
  console.log('안녕 나는 잘쌩긴 쫑이라고 해')
  console.log(`저는 ${name}입니다.`);
  console.log(`저는 ${birth}년 생이고`);
  console.log(`직업은 ${jop}입니다.`);
  console.log('그러니 내가 제일 귀여운 견생이다.')
}
const myArr = ['쫑이',2017,'잘생긴 강아지 모범생'];
introduce(...myArr);

//주의) 자체가 값이 아니라 각각 매칭되는 상황이라 가능

/* 오류발생할수 있으니 조심
const numbers2 = [1];
const numbers2 = ...numbers2;
*/
console.log('---')

//배열을 펼쳐서 객체에 담으면?

const members = ['쫑이','귐둥이 쫑이','잘생긴 쫑이'];
const newObject = {...members}; //중괄호 감싸서 객체 만들기
console.log(newObject);

/*
{0: '쫑이', 1: '귐둥이 쫑이', 2: '잘생긴 쫑이'}
0
: 
"쫑이"
1
: 
"귐둥이 쫑이"
2
: 
"잘생긴 쫑이"
[[Prototype]]
: 
Object

출력
*/ 