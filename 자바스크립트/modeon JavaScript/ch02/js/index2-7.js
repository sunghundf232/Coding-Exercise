//this : 자기 자신 표현 : 함수 내부에 사용, 특히 객체에 메소드 만들때 중요한 역할을 함

/*
console.log(this);
// window ~ 객체 나와
*/

const user = {
  firstName:'귐둥이',
  lastName:'쫑이',
  getFullName:function(){
    return `${user.firstName} ${user.lastName}`;
  },
};
console.log(user.getFullName());


