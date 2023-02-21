//2. map 

//forEach --> map 으로 변경하면 끝

//차이)

// 메소드 호출 결과로 새로운 배열 리턴



const firstName = ['영훈', '윤수', '동욱', '태호'];
const lastName = ['강', '이', '손', '성'];



firstName.map((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`);
  console.log(arr);
});

console.log('====');


['영훈', '윤수', '동욱', '태호'].map((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님이 입장했습니다.`);
  console.log(arr);
});

console.log('===')

//forEach vs map 차이)

// 메소드 호출 결과로 새로운 배열 리턴

firstName.map((firstName,i)=>{
  return lastName[i] + firstName
});

//--> 콜백함수에서 리턴문을 작성하면 각각 리턴값으로 구성된 새로운 배열이 메소드 결과로 리턴됨


const fullName = firstName.map((firstName,i)=>{
  return lastName[i] + firstName
});
console.log(fullName)

//--> 메소드 호출한 결과를 변수에 담아 콘솔에 출력하면 ?
//맴 메소드에 호출할때 작성된 콜백함수에 리턴값들로 구성된 배열이 출력

console.log('===');

//--> 애로우 펑션으로 간결하게 작성하기

const firstName1 = ['영훈', '윤수', '동욱', '태호'];
const lastName1 = ['강', '이', '손', '성'];

const fullName1 = firstName1.map((firstName1,i)=>lastName1[i] + firstName1);

console.log(fullName1)

console.log('===')

//참고 - forEach 메소드 리턴값 x
//--> 변수에 담았을때 underfined 값이 나와


const firstName2 = ['영훈', '윤수', '동욱', '태호'];
const lastName2 = ['강', '이', '손', '성'];

const fullName2 = firstName2.forEach((firstName2,i)=>lastName2[i] + firstName2);

console.log(fullName2)


