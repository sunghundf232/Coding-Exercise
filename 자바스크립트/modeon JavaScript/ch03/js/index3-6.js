//구조분해3(Destructuring) - es2015 - 배열,객체 문법을 분해하는 문법

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

//구조분해(Destructing)시

//1. underfined : ex) b에 변수값 할당시
// b에는 undefined가 할당되어야 하는데, 코드를 자세히 보면 변수 b는 기본값을 가지고 있죠? Destructuring을 할 때 변수에 할당될 값이 없거나 혹은 undefined값이 할당되면, 그 변수에는 undefined 대신 기본값이 할당됩니다

//2. null : ex) c가 기본값 가질때
//  이제 변수 c를 봅시다. c도 마찬가지로 기본값을 가지고 있는데요. 그런데 이번에 numbers에서 할당될 값은 null입니다. 앞서 언급한 것처럼 기본값은 할당될 값이 없거나 undefined 값이 할당될 때 사용되기 때문에, 그대로 변수 c에는 null값을 갖게 됩니다. undefined와 null을 혼동하지 않도록 주의해주세요!

console.log(title);
console.log(price);