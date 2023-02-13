// AND 와 OR연산방식

//console.log('codeit' && 'JavaScript')

//1) and(&) 연산자 : 양쪽 값 true 면 true  but) 하나가 false 면 false
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//--> 왼쪽 true면 오른쪽 값 리턴 / 왼쪽 false 면 왼쪽값 리턴

console.log('----')

//2) or(||)연산자 - 양쪽 false 면 false  but)하나가 true 면 true

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//왼쪽 true 면 왼쪽 true 리턴 , 왼쪽 false 면 오른쪽 값 리턴 

console.log('----')

//reivew AND 와 OR연산

console.log(null && undefined); //null
console.log(0 || true); //true
console.log('0' && NaN); // NaN
console.log({} || 123) //

console.log('----')

function print(value){
  const message = value || 'Codeit';
  console.log(message);
}

print();
print('JavaScript')


