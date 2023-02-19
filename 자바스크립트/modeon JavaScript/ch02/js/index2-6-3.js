// 애로우펑션 주의 - 아규먼트 객체가 없다. - 애로우펑션으로 대체 x

function normalFunc(){
  console.log(arguments);
};

const arrowFunc = () =>{
  console.log(arguments);
};

normalFunc(1,2,3);
arrowFunc(1,2,3,);