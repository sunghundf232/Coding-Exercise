//종합정리3

/*
에러와 에러 객체
자바스크립트에서 에러를 다루는 일은 굉장히 중요하다고 할 수 있는데요.
자바스크립트에서 에러가 발생하면 그 순간 프로그램 자체가 멈춰버리고 이후의 코드가 동작하지 않기 때문입니다.

그리고 에러가 발생하면 에러에 대한 정보를 name과 message라는 프로퍼티로 담고 있는 에러 객체가 만들어지는데요.
대표적인 에러 객체는 SyntaxError, ReferenceError, TypeError 입니다.

에러 객체는 직접 만들 수도 있는데요.
new 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, throw 키워드로 에러를 발생시킬 수 있습니다.
*/


throw new TypeError('타입 에러가 발생했습니다.');

// //try catch문
// try catch문은 자바스크립트에서 대표적인 에러 처리 방법입니다.

/*
try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
}
*/

/*
try문 안에서 실행할 코드를 작성하고, try문에서 에러가 발생한 경우에 실행할 코드를 catch 문 안에 작성하면 되는데요.
이 때 try문에서 발생한 에러 객체가 catch문의 첫 번째 파라미터로 전달됩니다. 만약, try문에서 에러가 발생하지 않을 경우 catch문의 코드는 동작하지 않습니다.

그리고 try catch문에서 에러의 유무와 상관없이 항상 동작해야할 코드가 필요하다면 finally문을 활용할 수 있습니다.
*/

/*
try {
  // 실행할 코드
} catch (error) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
*/