//배열 => 순서가 있는 값 만들때 좋아

let member = ['쿤갈레','지브라','우리생각해써','흙토끼','End Miracle'];
console.log(member);
console.log(typeof member);

let data = new Date();
console.log(data);

// 배열 다루기

console.log(member.length);
console.log(member['length']);
console.log(member[member.length-1]); //배열 마지막 요소 : End Miracle나와
//띄어 넘어서 추가하면 안됨 무조건 순서대로 않하면 underfined 나와
member[6] = 'NiceCodeit';
console.log(member[5]);

//띄어 넘어서 추가하면 안됨 무조건 순서대로


//배열 추가
member[5] = 'NiceCodeit';
console.log(member[5]);

//배열 수정
member[3] = '달토끼';
console.log(member);

//배열 삭제 (//객체 삭제 : delete)

console.log(member);
delete member[4];
console.log(member);

