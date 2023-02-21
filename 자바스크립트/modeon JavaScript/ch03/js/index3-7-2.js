//구조분해8(Destructuring) - es2015 - 배열,객체 문법을 분해하는 문법

// 객체 활용 - 프로퍼티 네임으로 구분
// 매번 객체 작성 x -> 간결하게 프로퍼티 네임자체 변수처럼 사용

// 함수와 사용하여 복습하기

// 객체로 활용해보기 - 함수가 객체를 리턴시 사용가능

function getObject(){
  return {
    name:'쫑이',
    brith:2017,
    job:'귐둥이 견생'
  }
};
const {name : brand, brith,job} = getObject();

console.log(brand);
console.log(brith);
console.log(job);

console.log('===')

// but) 객체 : 객체 리턴하는 함수보다 파라미터를 객체 형태로 작성한 함수에서 유용해

const macbook = {
  title : '맥북 프로 16형',
  price : 36.900,
  memory : '16 GB',
  storage : '1TB SSD 저장 장치',
  display : '16형 Retina 디스플레이',
};

function printSummary(object){
  // console.log(`선택한 상품은 ${object.title} 입니다.`);
  // console.log(`색상은 ${object.color}이며,`);
  // console.log(`가격은 ${object.price}`);

  //--> 구조분해 문법 활용해서 간결하게 작성하기

  const {title,color,price} = object;
   console.log(`선택한 상품은 ${title} 입니다.`);
   console.log(`색상은 ${color}이며,`);
   console.log(`가격은 ${price}`);

};

printSummary(macbook);

console.log('===');

function printSummary(title,color,price){
  
  //예시처럼 다른건 추가하지 않고 title,color,price으로만 추가하고 싶다면? 
  
   console.log(`선택한 상품은 ${title} 입니다.`);
   console.log(`색상은 ${color}이며,`);
   console.log(`가격은 ${price}`);

};

printSummary(macbook);

