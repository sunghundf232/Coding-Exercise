//모던한 프로퍼티 표기법

/* 기존 프로퍼티
const user = {
  title:'쫑이',
  birth:2017,
  jop:'귐둥이 견',
};
*/
console.log('====')

//es2015 객체 프로퍼티 간결하게 표현
//1) 변수에 할당된 값을 활용해서 프로퍼티 생성

const title = '쫑이';
const birth = 2018;
const jop = '세상에서 젤 잘생긴 쫑이';

const user = {
  //변수와 프로퍼티가 같다면 하나만 작성해도 good
  /*
  title : title,
  brith : brith,
  job:jop,
  */
  title,
  birth,
  jop,
}; 
console.log(user);

//변수와 함수를 메소드로 만들때도 축약형 만들수 있어

function getFullName(){
  return `${this.firstName} ${this.lastName}`;
};

const user2 = {
  firstName:'귐둥이',
  lastName:'쫑이',
  //getFullName:getFullName,
  getFullName,
};

const admin = {
  firstName:'세상에서 젤',
  lastName:'잘생긴 쫑이',
  //getFullName:getFullName,
  getFullName,
}

console.log(user2.getFullName());
console.log(admin.getFullName());

console.log('===')

//객체 내부에서 메소드를 선언할때도 - ':' , 'function' 생략가능

const user3 = {
  firstName:'내가 견생중 젤',
  lastName:'잘생긴 쫑이야',
  
  //getFullName:function(){
    //return `${this.firstName} ${this.lastName}`;
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user3.getFullName());

console.log('===')

//사용할 변수 이름을 한 번만 작성해서 간결하게 표현한 것은 맞지만, 각 프로퍼티를 구분하는 방식이 세미콜론으로 작성되었습니다. 프로퍼티를 구분할 때는 쉼표(,)를 사용해야 합니다.

//프로퍼티 네임을 표현식으로 나타내기
//--> 계산된 속성명
/*
const user4 = {
  [표현식]:값,
}
*/

const user4 = {
  ['Codeit' + 'it']:'value',
};
console.log(user4);

console.log('===')

//변수에 값을 사용 , 함수에 리턴값도 사용가능

const propertyName = 'brith';
const getJop = ()=> 'job';

const codeit = {
  ['top' + 'Name'] : 'Modern JavaScript',
  [propertyName]:2017,
  [getJop()]:'프로그래밍 강사',
};
console.log(codeit);





