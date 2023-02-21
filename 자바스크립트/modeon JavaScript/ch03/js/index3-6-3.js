//구조분해5 (Destructuring) - es2015 - 배열,객체 문법을 분해하는 문법

// 객체 활용 - 프로퍼티 네임으로 구분
// 매번 객체 작성 x -> 간결하게 프로퍼티 네임자체 변수처럼 사용

const macbook = {
  title : '맥북 프로 16형',
  price : 36.900,
  memory : '16 GB',
  storage : '1TB SSD 저장 장치',
  display : '16형 Retina 디스플레이',
  //변수의 이름으로 사용할수 없을때
  'serial-num' : '나는야 젤 귀염둥이 쫑이'
};

// const title = macbook.title;
// const price = macbook.price;

//나머지 프로퍼티를 하나의 객체를 모으는 방법을 제외하면

//변수의 이름은 프로퍼티 네임과 같아야 하는가?

//title 이 아닌 product 새로운 변수 선언 가능
//but) 에러 떠

//const {title:product,...rest} = macbook;

// 새로운 변수로 선언하기 꼭 필요할때?
  //변수의 이름으로 사용할수 없을때 ex) 'a' : 'b'

//--> 새로운 이름으로 변수를 사용할때 에러가 터지지 않는다.

//--> 1. 새로운 이름으로 반듯이 변수로 사용해라  
const {title:product,'serial-num':serialNum} = macbook;

// console.log(title);
// console.log(rest);
//why) product로 선언되기 때문에 product가 없어서 에러 뜨는것임

//따라서 title --> product로 바꾸기

console.log(product);
console.log('serial-num');