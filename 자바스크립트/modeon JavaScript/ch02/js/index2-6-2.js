// 애로우 펑션3

const getTwice = (number) =>{
  return number *2
};
console.log(getTwice(3));

console.log('-----')

//조건

//1. 파라미터가 하나면 소괄호 생략

const getTwice1 = number =>{
  return number *2
};
console.log(getTwice(3));

//2.파라미터가 2개 이상 : 소괄호 필히 작성

const sum = (a,b)=>{
  return a+b;
};
console.log(sum(10,5));

console.log('----')

//3. 파라미터가 없을때 :  소괄호 필히 작성

const getCodeit = ()=>{
  return {name:'Codeit',};
};

console.log(getCodeit());

//4. 내부의 동작부분이 return문 하나로만 이루어질시 : 중괄호 와 함께 리턴 키워드 생략

/*
const getTwice4 = (number) =>{
  return number *2
};
*/
//--> 한줄로 작성 가능

const getTwice4 = number => number *2

//5. 함수 내부에 조건문,반복문 , 변수의 값을 할당하는것과 같이 리턴문 외 다른 표현들이 표현시 중괄호와 리턴은 생략 불가

/*
const sum = (a,b)=>{
  return a+b;
};
console.log(sum(10,5));
*/

//--> ex)

const sum2 = (a,b)=>{
  const result = a+b;
  return result;
};

//6.  내부동작이 리턴문 하나만 있지만 그 값이 객체인 경우 중괄호 와 리턴 키워드 생략시 에러가 발생

/*
const getCodeit5 = () =>{
  name:'Codeit',
}
*/

//--> () 추가
const getCodeit5 = () =>({
  name:'Codeit'
});



