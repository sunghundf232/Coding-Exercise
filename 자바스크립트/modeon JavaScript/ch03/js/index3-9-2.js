//종합정리2

// 모던한 프로퍼티 표기법
// ES2015 이후부터는 자바스크립트에서 변수나 함수룰 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다음과 같이 축약해서 사용할 수 있습니다.


//그리고 메소드를 작성할 때도 다음과 같이 function 키워드를 생략할 수가 있습니다.

const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // Tess Jang

//뿐만아니라 아래 코드와 같이 대괄호를 활용하면 다양한 표현식으로 프로퍼티 네임을 작성할 수도 있으니까 잘 기억해 두셨다가 유용하게 활용해 보세요!

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);

// 구조 분해 Destructuring
// 배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수가 있습니다.

//함수에서 default parater, rest parameter를 다루듯이 Destructuring 문법을 활용할 때도 기본값과 rest 문법을 활용할 수 있습니다.

// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB 2667 MHz DDR4',
  storage: '1TB SSD 저장 장치',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}