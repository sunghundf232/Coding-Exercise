//구조분해3 - es2015 - 배열,객체 문법을 분해하는 문법

// 객체 활용 - 프로퍼티 네임으로 구분
// 매번 객체 작성 x -> 간결하게 프로퍼티 네임자체 변수처럼 사용

const macbook = {
  title : '맥북 프로 16형',
  price : 36.900,
  memory : '16 GB',
  storage : '1TB SSD 저장 장치',
  display : '16형 Retina 디스플레이',
};

// const title = macbook.title;
// const price = macbook.price;

//--> 구조분해 문법(Destructuring)  작성
const {title,price} = macbook;

//오른쪽 객체에서 왼쪽에 선언된 변수에 선언된 똑같은 변수 이름이 있으면 그 값이 할당되는 동작으로 구현

// 이외 - 배열에 구조분해랑 비슷하게 동작
// 객체에 선언되지 않는 이름 추가시 underfined 떠


console.log(title);
console.log(price);