//구조분해7(Destructuring) - es2015 - 배열,객체 문법을 분해하는 문법

// 객체 활용 - 프로퍼티 네임으로 구분
// 매번 객체 작성 x -> 간결하게 프로퍼티 네임자체 변수처럼 사용

// 함수와 사용하여 복습하기


//2. rest 파라미터가 배열로 - 구조분해 문법 사용

function printWinners(...arg){
  const [macbook,ipad,airpods,...coupon] = arg;

  console.log('이벤트 결과를 알려드립니다.');
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패드 주인공은 '${ipad}'님 입니다.`);
  console.log(`에어팟 주인공은 '${airpods}'님 입니다.`);
  console.log('코드잇 3개월 수강권 주인공은');

  for(let user of coupon){
    console.log(`'${user}'님`);
  }
  console.log(`이상 총 ${coupon.length}명 입니다.`);
};

printWinners('호준','효신','제훈','소원','현승','주경')

console.log('====')

function printWinners(macbook,ipad,airpods,...coupon){
  console.log('이벤트 결과를 알려드립니다.');
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패드 주인공은 '${ipad}'님 입니다.`);
  console.log(`에어팟 주인공은 '${airpods}'님 입니다.`);
  console.log('코드잇 3개월 수강권 주인공은');

  for(let user of coupon){
    console.log(`'${user}'님`);
  }
  console.log(`이상 총 ${coupon.length}명 입니다.`);
};

// printWinners('호준','효신','제훈','소원','현승','주경');
// printWinners(ranks)

const ranks = ['호준','효신','제훈','소원','현승','주경'];
printWinners(ranks);