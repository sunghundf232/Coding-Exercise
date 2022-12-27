

//배열 메소드

let member = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];
console.log(member);

//splice(startIndex,deleteCount,item)

/*
member.splice(2,2,'MaumNo','산토끼');
console.log(member);
*/

/*
//배열 첫 요소(쿤갈레) 를 삭제
member.splice(0,1);

//배열 마지막 요소 삭제

member.splice(member.length-1,1);

//배열 첫 오소 추가
member.splice(0,0,'NiceCodeit');

//배열의 마지막 요소 값 추가

member.splice(member.length,0,'HiCodeit');
*/

//splice보다 간결한 문법

//배열 첫 요소(쿤갈레) 를 삭제 :shift()
member.shift();
console.log(member);

//배열 마지막 요소 삭제 : pop()
member.pop();
console.log(member);

//배열 첫 오소 추가 : unshift(추가할 값 넣기)
member.unshift('NiceCodeit');
console.log(member);

//배열의 마지막 요소 값 추가 : push(추가할 값 넣기);
member.push('HiCodeit');
console.log(member);

let number = [1,3,5,6,8,10];

number.pop(); //마지막 10 삭제
number.unshift(3); //첫번째 3추가
number.shift(); //첫번째 삭제

console.log(number);

function range(start, count, step) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(start + i * step)
  }

  return arr;
}

// 테스트 코드
console.log(range(1, 10, 3));

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum')); //Daum이 70번줄에 없어서 -1 로 return

let brands2 = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands);
brands.reverse();
console.log(brands);
