// 이전 노트에서는 fetch 함수가 비동기 실행된다는 게 무슨 의미인지, 그리고 비동기 실행이 동기 실행에 비해서 가지는 장점이 무엇인지 배워봤습니다. 사실 자바스크립트에는 fetch 함수 말고도, 비동기 실행되는 함수들이 존재합니다. 그 예시들을 하나씩 살펴보겠습니다.

// 이전 노트에서는 fetch 함수가 비동기 실행된다는 게 무슨 의미인지, 그리고 비동기 실행이 동기 실행에 비해서 가지는 장점이 무엇인지 배워봤습니다. 사실 자바스크립트에는 fetch 함수 말고도, 비동기 실행되는 함수들이 존재합니다. 그 예시들을 하나씩 살펴보겠습니다.

console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');

// 예를 들어 이런 코드가 있을 때, 지금 가운데에 있는 setTimeout 함수는 첫 번째 파라미터에 있는

// () ⇒ { console.log('b'); },

// 이 콜백의 실행을, 두 번째 파라미터에 적힌 2000 밀리세컨즈(=2초) 뒤로 미룹니다. 그래서 이 코드를 실행하면

// 이렇게 a와 c가 먼저 출력되고, 약 2초가 지난 후에 b가 출력됩니다. 실제로 확인하고 싶은 분들은 직접 코드를 복사해서 개발자 도구에서 확인해보세요.

// fetch 함수에서는 콜백이 실행되는 조건이, '리스폰스가 도착했을 때'였다면, setTimeout에서 콜백이 실행되는 조건은, '설정한 밀리세컨즈만큼의 시간이 경과했을 때'입니다. 어쨌든 둘 다 콜백의 실행을 나중으로 미룬다는 점에서는 비슷합니다. 이 setTimeout 함수는 아주 자주 활용되는 비동기 실행 함수이고 이번 토픽에서도 앞으로 자주 사용할 거니까 꼭 기억하세요.

//2. setInterval 함수

// setInterval 함수는 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수입니다. Interval는 '간격'이라는 뜻인데요. 바로 위에서 봤던 예시 코드에서 setTimeout 부분만 setInterval로 바꿔서 실행해보겠습니다.

console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');

// a와 c가 출력되고, 약 2초 뒤에 b가 출력된 후 그 뒤로 계속 2초 간격으로 b가 반복 출력되는 것을 볼 수 있습니다. (현재 b 왼쪽에 쓰여 있는 5는 b가 다섯 번 출력되었음을 개발자 도구가 간단하게 나타낸 것입니다)

// 3. addEventListener 메소드
// addEventListener 메소드는 DOM 객체의 메소드인데요, 혹시 관련된 내용을 공부하고 싶으신 분들은 '인터랙티브 자바스크립트' 토픽의 아래의 레슨들을 참고하시면 됩니다.

// '이벤트와 버튼 클릭' 레슨
// '이벤트 핸들러 등록하기' 레슨
// 만약 사용자가 웹 페이지에서 어떤 버튼 등을 클릭했을 때, 실행하고 싶은 함수가 있다면

// (1) 해당 DOM 객체의 onclick 속성에 그 함수를 설정하거나, 
// (2) 해당 DOM 객체의 addEventListener 메소드의 파라미터로 전달하면 됩니다.

// 이런 식으로 말이죠.

// (1) onclick 속성

//...

btn.onclick = function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
};

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다. 
btn.onclick = (e) => {
  console.log('Hello Codeit!');
};

//...

//(2) addEventListener 메소드

btn.addEventListener('click', function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
});

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
btn.addEventListener('click', (e) => {
  console.log('Hello Codeit!');
});

// 이렇게 클릭과 같은 특정 이벤트가 발생했을 때 실행할 콜백을 등록하는 addEventListener 메소드도 비동기 실행과 관련이 있습니다. 파라미터로 전달된 콜백이 당장 실행되는 것이 아니라, 나중에 특정 조건(클릭 이벤트 발생)이 만족될 때(마다) 실행되기 때문입니다. 


// 자, 이때까지 자바스크립트의 대표적인 비동기 실행 함수들을 살펴봤는데요. 그런데 이때까지 배운 fetch 함수와 이번 노트에서 본 함수들을 보면 차이점이 있습니다. 일단 이번 노트에서 배운 함수들을 보면

setTimeout(콜백, 시간) 
setInterval(콜백, 시간)
addEventListener(이벤트 이름, 콜백)

// 이런 식으로, 함수의 아규먼트로 바로 콜백을 넣습니다. 그런데 fetch 함수는 이 함수들과는 전혀 다르게 생겼습니다. 지금 보면,

fetch('https://www.google.com')
  .then((response) => response.text()) // fetch 함수가 리턴하는 객체의 then 메소드를 사용해서 콜백을 등록
  .then((result) => { console.log(result); });

//   fetch 함수는 콜백을 파라미터로 바로 전달받는 게 아니라, fetch 함수가 리턴하는 어떤 객체의 then 메소드를 사용해서 콜백을 등록하는데요.

// 위에서 본 함수들처럼, fetch 함수도 이런 식으로 코드를 써야할 것만 같은데.

fetch('https://www.google.com', (response) => response.text())


// 왜 fetch 함수만 사용하는 형식이 다른 걸까요? 그건 바로 fetch 함수는, 좀 더 새로운 방식으로 비동기 실행을 지원하는 자바스크립트 문법과 연관이 있기 때문입니다. 사실 fetch 함수는 Promise 객체라는 것을 리턴하고, 이 Promise 객체는 비동기 실행을 지원하는 또 다른 종류의 문법에 해당하는데요. 이게 무슨 말인지 다음 영상에서 살펴봅시다.