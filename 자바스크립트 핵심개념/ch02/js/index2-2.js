// 형 변화 (Type Conversion)

console.log('4'-true);

console.log('산출 연산(+,-,*,/,%,**');

console.log(4+'2');
console.log(4+2);
console.log(4-true);
console.log(4*false);
console.log(4/'2');
console.log('4'**true);
console.log(4%'two');

console.log('관계비교 연산(<,<=,>,>=');

console.log(2<'3');
console.log(2>true);
console.log('2'<=false);
console.log('two'>=1);

console.log('비교연산 ===,!==,==,!=');
console.log(1==='1'); //일치,불일치(!==) / 형변환 x / 비교할때 사용하면 good
console.log(1===true);
console.log(1=='1'); //동등,부등(!=) / 형 변환 o
console.log(1==true);

let year = 2018;
let month = 3;
let day = 11;

console.log('생년월은'+ year + '년' + month +'월' + day +'일입니다.');
console.log(`나의 생일은 ${year}년${month}월${day}일입니다.`);

console.log('업그레이드');
let myNumber = 3;
function getTwice(x){
  return x *2;
}
console.log(`${myNumber}의 두배는 ${getTwice(myNumber)}입니다.`);

let codeit;
console.log('codeit');

codeit = null;
console.log(codeit);

console.log(null == undefined);
console.log(null === undefined);

let cup;
console.log(cup);

cup = '물';
console.log(cup);

cup = null;
console.log(cup);