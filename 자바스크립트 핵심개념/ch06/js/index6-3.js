//문자열을 객체처럼


//String

let myString = 'Hi Codeit';

//양 끝 공백제거
console.log(myString.trim()); //양쪽 끝 공백제거 //이외 양쪽끝 공백포함해서 출력
/*
Hi Codeit
  HI CODEIT 
  hi codeit
  
  -> 이렇게 출력
*/

//부분 문자열 접근 slice(start,end);

console.log(myString.slice(0,2));
console.log(myString.slice(3));
console.log(myString.slice()); //문자열 전체 출력



//대소문자 변신

console.log(myString.toUpperCase()) //대문자
console.log(myString.toLowerCase()) //소문자

//요소탐색
console.log(myString.indexOf('i')) //앞부터
//console.log(myString.indexOf('a')) //6번 라인 결과값에 "a"가 없어서 "-1" 출력
console.log(myString.lastIndexOf('i')) //뒤부터

//요소접근

console.log(myString[3]); //대괄호 표기법
console.log(myString.charAt(3)); //charAt 메소드

//문자열 길이

console.log(myString.length); //length 표기법


//기타

let myString3 = 'Codeit';

for (let str of myString) {
  console.log(str);
}

let myString4 = 'Codeit';
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof myString4);
console.log(typeof myArray);

//실습

let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 여기에 코드를 작성하세요
let start = lyrics.indexOf('[형돈');
let last = lyrics.lastIndexOf('[길]');
hyungdon = lyrics.sli(start,last);

// 테스트 코드
console.log(hyungdon);