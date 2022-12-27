//null : 값 없다(의도적) , underfined : 값이 실행했는데 값이 없을때     => 값이 없다  불린형으로 나타낼때 false 의미


let 아악;
console.log(아악);

let 아악2 = null
console.log(아악2);

function noReturnValue(){
  console.log('응 없어');
};

let x = noReturnValue();
console.log(x)

console.log(Boolean(null));
console.log(Boolean(undefined));


