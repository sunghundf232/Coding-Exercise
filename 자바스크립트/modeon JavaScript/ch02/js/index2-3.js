//파라미터1 - 함수 호출이 밖에서 안쪽으로 다양한 값들을 전달하고자 할때

//복습

/*
function greeting(name //파라미터){
   //함수 내부의 동작 부분에 변수처럼 활용
  //console.log(`안녕 나의 이름은 ${name}!`)
}

//파라미터 활용 : 같은 함수라도 전달하는 값에 따라 다양한 결과가 동작
/*
greeting('귀염둥이 쫑이');
greeting('잘생긴 쫑이');
greeting('멋있는 쫑이');
*/
//주의 : 이 예시의 greeting(a) 함수 호출할때 파라미터 전달하는 값 : 아규먼트 (파라미터와 용어 비교시 주의)

//파라미터 기본값 - 아규먼트가 전달하지 않을때 - 함수가 동작할때 underfined로 출력

//greeting();

//해결책

/*
function greeting(name = '쫑이라고 해' //파라미터 = a(할당 연산자)){
   //함수 내부의 동작 부분에 변수처럼 활용
  console.log(`안녕 나의 이름은 ${name}!`)
}

greeting()
//기본값으로 안녕 나의 이름은 쫑이라고 해 출력
*/

function greeting(name = '안녕 나는 쫑이라고 해',interest){
  console.log(`안녕 나의 이름은 ${name}! 라고 해`);
  console.log(`i like ${interest}`);
};

greeting('나는 쫑이!')
//interest : 동작 구현이 없어서 underfined 출력

//따라서 기본값이 필요한 파라미터 값은 오른편에 작성