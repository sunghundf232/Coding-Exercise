//배열의 메소드 

let member = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];

console.log(member);

/*
//1. 배열 삭제 - 완전히 삭제 x
delete member[4];
console.log(member)
*/

//2. 완전히 삭제 : Splice

//member.splice(1); // ex) 1: 쿤갈레 이외 삭제 //

//member.splice(1,2);
//splice(a,b) b까지 삭제할 개수 조절

//splice(삭제를 시작할 부분 , 삭제할 개수 입력)
//splice(삭제를 시작할 부분) : 시작한 부분 이외 다 삭제

//삭제 부분에 추가하기

//최종정리

// splice(삭제를 시작할 부분 , 삭제할 개수 입력 , item)
// 삭제할 개수에 item 값이 들어갈수 있어 따라서 순서가 밀려

/*
member.splice(1,1,'NiceCodeit','HiCodeit');


console.log(member);
*/

//응용 타임
// splice(삭제를 시작할 부분 , 삭제할 개수 입력 , item)

/*
member.splice(1,1,'Nice time','revenge');
console.log(member);
*/

//추가

/*
member.splice(1,0,'Nice time','revenge');
console.log(member);
*/

//수정

member.splice(2,2,'revenge','산토끼');
console.log(member);