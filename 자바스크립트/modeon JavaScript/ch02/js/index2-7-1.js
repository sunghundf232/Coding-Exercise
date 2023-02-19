//this 
//2. : 자기 자신 표현 : 함수 내부에 사용, 특히 객체에 메소드 만들때 중요한 역할을 함

/*
console.log(this);
// window ~ 객체 나와
*/

function getFullName(){
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName:'나는',
  lastName:'귐둥이 쫑이라고해',
  getFullName:getFullName,
}
console.log(user.getFullName());
const admin = {
  firstName:'안녕 이 세상에 젤 귐둥이 견',
  lastName:'나야 나 쫑이',
  getFullName:getFullName,
}

console.log(admin.getFullName());

//최종 결론 : function 문장에 리턴값이 user밖에 없어서 
//const user 값이 두번 출력됨

console.log('====')

// 두개 출력 해보기 : this 사용

function getFullName(){
  return `${this.firstName} ${this.lastName}`;
}

const user1 = {
  firstName:'나는',
  lastName:'귐둥이 쫑이라고해',
  getFullName:getFullName,
}
console.log(user.getFullName());
const admin1 = {
  firstName:'안녕 이 세상에 젤 귐둥이 견',
  lastName:'나야 나 쫑이',
  getFullName:getFullName,
}

console.log(admin.getFullName());