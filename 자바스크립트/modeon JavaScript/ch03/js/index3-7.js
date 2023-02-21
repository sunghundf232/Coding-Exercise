//구조분해7(Destructuring) - es2015 - 배열,객체 문법을 분해하는 문법

// 객체 활용 - 프로퍼티 네임으로 구분
// 매번 객체 작성 x -> 간결하게 프로퍼티 네임자체 변수처럼 사용

// 함수와 사용하여 복습하기

//1. 함수가 리턴하는 값이 배열일때 리턴값 활용
function getArray(){
  return ['귐둥이 쫑이','잘생긴 쫑이','귐둥이 견'];
};

const [el1,el2,el3] = getArray();

console.log(el1);
console.log(el2);
console.log(el3);

console.log('===')

//2. rest 파라미터가 배열로 - 구조분해 문법 사용

function printWinners(...arg){
  const [macbook,ipad,airpods,...coupon] = arg;

  console.log('이벤트 결과를 알려드립니다.');
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패드 주인공 '${ipad}'님 입니다.`);
  console.log(`에어팟의 주인공은 '${airpods}'님 입니다.`);
  console.log('코드잇은 3개월 수강권 주인공은');

  for(let user of coupon){
    console.log(`'${user}'님`);
  }
  console.log(`이상 총 ${coupon.length}명 입니다.`);
}
printWinners['쫑이','귐둥이 쫑이','멋쟁이 쫑이','젤 귀여분 쫑이','현승','종훈']