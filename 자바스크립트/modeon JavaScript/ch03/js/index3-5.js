//구조분해 - es2015 - 배열,객체 문법을 분해하는 문법

//배열 과 객체는 여려개 값을 다룰때 유용해

const rank = ['쫑이','귐둥이 쫑이','잘생긴 쫑이','멋진 견 쫑이','나야나 쫑이'];

/*
const macbook = {
  title : '맥북 프로 16형',
  price : 36.900`,
  memory : '16 GB',
  storage : '1TB SSD 저장 장치',
  display : '16형 Retina 디스플레이',
};
*/
//배열의 인덱스 - 이름이 추가 되면 배열에 순서에 맞춰서 변경됨
// const macbook = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const coupon = rank[3];

//구조분해 문법(Destructuring) - 배열 순서대로 할당
//const [macbook,ipad,airpods,coupon] = rank;//할당연산자 , 배열 형식x(1,2,3) or 빈칸일시 오류발생

//마지막 변수에 '...' 붙이면 ? 앞쪽에 있는 변수 순서에 할당 나머지 요소는 마지막 변수에 배열로 할당 가능 

//(2) ['멋진 견 쫑이', '나야나 쫑이'] 출력 따라서 마지막 변수에 적용

const [macbook,ipad,airpods,...coupon] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);