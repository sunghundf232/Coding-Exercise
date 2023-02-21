// 에러와 여러 객체2

//기타에러

/*
Error
Error 객체는 런타임 오류가 발생했을 때 던져집니다. Error 객체를 사용자 지정 예외의 기반 객체로 사용할 수도 있습니다. 아래 표준 내장 오류 유형을 참고하세요.

설명
런타임 오류는 새로운 Error 객체를 생성하고 던집니다.

오류 유형
JavaScript에는 일반적인 Error 생성자 외에도 여러 개의 중요 오류 생성자가 존재합니다. 클라이언트측 예외에 대해서는 제어 흐름과 에러 처리를 참고하세요.

EvalError
전역 함수 eval() (en-US)에서 발생하는 오류의 인스턴스를 생성합니다.

RangeError
숫자 변수나 매개변수가 유효한 범위를 벗어났음을 나타내는 오류 인스턴스를 생성합니다.

ReferenceError
잘못된 참조를 했음을 나타내는 오류 인스턴스를 생성합니다.

SyntaxError
eval() (en-US)이 코드를 분석하는 중 잘못된 구문을 만났음을 나타내는 오류 인스턴스를 생성합니다.

TypeError
변수나 매개변수가 유효한 자료형이 아님을 나타내는 오류 인스턴스를 생성합니다.

URIError
encodeURI()나 decodeURl() 함수에 부적절한 매개변수를 제공했을 때 발생하는 오류의 인스턴스를 생성합니다.

AggregateError
하나의 동작이 여러 개의 오류 발생시키는 경우(예: Promise.any() (en-US)) 여러 오류를 하나의 오류로 감싸는 인스턴스를 만듭니다.

InternalError 비표준
JavaScript 엔진의 내부에서 오류가 발생했음을 나타내는 오류 인스턴스를 생성합니다.

생성자
Error()
새로운 Error 객체를 만듭니다.

정적 메서드
Error.captureStackTrace()
오류 인스턴스의 stack (en-US) 속성을 만드는 비표준 V8 함수

인스턴스 속성
Error.prototype.message
오류 메시지

Error.prototype.name
오류 이름

Error.prototype.description
오류를 설명하기 위한 비표준 마이크로소프트 속성. message와 비슷합니다.

Error.prototype.number
오류 번호를 위한 비표준 마이크로소프트 속성

Error.prototype.fileName
해당 오류를 발생시킨 파일의 경로를 표시하기 위한 비표준 모질라 속성

Error.prototype.lineNumber
해당 오류를 발생시킨 파일의 줄 번호를 표시하기 위한 비표준 모질라 속성

Error.prototype.columnNumber
해당 오류를 발생시킨 파일의 칸 번호를 표시하기 위한 비표준 모질라 속성

Error.prototype.stack (en-US)
스택 추적을 위한 비표준 모질라 속성

인스턴스 메서드
Error.prototype.toString()
명시된 객체를 표현하기 위한 문자열을 반환합니다. Object.prototype.toString() 메서드를 오버라이드합니다..
*/

//예제 에러 처리하기

//예제 1
try {
  throw new Error("이런!");
} catch (e) {
  alert(e.name + ": " + e.message);
};

//예제2 - 특정 오류 처리하기
// 오류의 constructor 속성을 이용해 유형을 판별, 특정 오류만 처리할 수 있습니다. 만약 최신 Javascript 엔진에서 동작하는 코드를 작성한다면 instanceof 키워드를 이용할 수도 있습니다

try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ": " + e.message);
  }
  // ... etc
}

// throw new MyError() 이후 instanceof MyError로 직접 만든 오류를 판별할 수 있도록 Error의 파생 오류 정의를 고려해보세요. 더 깔끔하고 일관적인 오류 처리 코드를 작성할 수 있습니다.

/*
ES6 사용자 정의 오류 클래스
경고: Babel 버전 7 미만으로 사용자 정의 오류 클래스를 처리하려면 Object.defineProperty() 메서드를 사용해 정의해야만 합니다. 그렇지 않으면 오래된 Babel 및 다른 트랜스파일러가 추가 설정 없이 코드를 처리할 수 없습니다.

참고: ES2015 클래스를 사용할 때, 일부 브라우저는 CustomError 생성자를 스택 트레이스에 포함합니다.


*/

class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.foo); //baz
  console.log(e.message); //bazMessage
  console.log(e.stack); //stacktrace
};

//ES5 사용자 정의 오류 객체

// 프로토타입 선언을 사용하면 모든 브라우저가 CustomError 생성자를 스택 트레이스에 포함합니다.

function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}


try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.foo); //baz
  console.log(e.message) ;//bazMessage
}










