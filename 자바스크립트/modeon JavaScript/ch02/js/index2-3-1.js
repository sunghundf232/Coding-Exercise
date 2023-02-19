//파라미터 2 - 함수 호출이 밖에서 안쪽으로 다양한 값들을 전달하고자 할때

//name 파라미터 기본값 사용하려고 할때?

/*
function greeting(name = '나는', interest = '쫑이'){
  console.log(`안녕 나의 이름은 ${name}라고 해`);
  console.log(`i like ${interest}`);
}  
greeting('Python')

//출력 1. 안녕 나의 이름은 Python라고 해 2. i like 쫑이
*/

function greeting(name = '나는', interest = '쫑이'/* -> 기본값 */){
  console.log(`안녕 나의 이름은 ${name}라고 해`);
  console.log(`i like ${interest}`);
}
greeting(undefined,'Paython')
// --> 파라미터 기본값은 아규먼트 생략 또는 underfined값으로 전달될때 동작

/* 위에 예시 코드 출력시
name: underfind가 전달되서 기본값을 가진채로 동작
--> 안녕 나의 이름은 나는라고 해
interest : Paython전달 - > 전달받은 아규먼트 값으로 출력 
*/