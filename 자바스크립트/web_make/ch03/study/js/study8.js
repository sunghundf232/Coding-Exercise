// Promise 객체는 왜 등장했을까?

// 이때까지 우리는 Promise Chaining, then/catch/finally 메소드 등 Promise 객체에 관한 많은 것들을 배웠습니다. 그런데 여기서 궁금한 점이 하나 있습니다. Promise 객체는 왜 등장한 걸까요?

// 사실 Promise 객체가 등장하기 전에도 비동기적인 처리를 할 수 있는 방법은 있었습니다. 
// 이전 노트에서 배운 setTimeout 함수나, addEventListener 메소드처럼요.

setTimeout(callback, milliseconds);
addEventListener(eventname, callback);

// 이것들은 모두 직접 파라미터에 콜백을 전달하는 형식으로 정의되어 있는데요. 만약 fetch 함수를 이런 식으로 만들었다면

fetch('https;//first.com', callback)

// fetch 함수도 이런 식으로 사용했었겠죠? 그런데 왜 이런 방법이 선택되지 않고, 굳이 Promise 객체라는 문법이 도입된 것일까요? 
// 그 이유는 바로 함수에 콜백을 직접 넣는 형식은 콜백 헬(callback hell)이라고 하는 문제를 일으킬 수도 있기 때문입니다.

// 잠깐 이 코드를 봅시다. 만약 fetch 함수가 지금과 같이 Promise 객체를 리턴하는 게 아니라 setTimeout 함수처럼 콜백을 직접 집어넣는 형식의 함수였다면 우리는 여러 비동기 작업을 순차적으로 수행해야할 때

fetch('https://first.com', (response) => {
  // Do Something
  fetch('https://second.com', (response) => {
    // Do Something
    fetch('https;//third.com', (response) => {
      // Do Something
      fetch('https;//fourth.com', (response) => {
        // Do Something
      });
    });
  });
});

// 이런 식의 코드를 작성해야 했을 겁니다. 지금 fetch 함수 안의 콜백에 fetch 함수가 있고 그 함수의 콜백 안에 fetch 함수가 있고 또.. 계속 이런 식으로 들어가있죠? 그런데 이 코드를 보면 어떤 느낌이 드시나요? 뭔가 읽기 어렵고 복잡해 보이죠? 한마디로 가독성이 떨어집니다. 그나마 지금은 실제 코드가 들어가야 할 자리에 "// Do Something" 이라는 주석이 들어가 있어서 괜찮지만, 실제로 필요한 코드들까지 들어가게 되면 이 코드의 가독성은 현저하게 떨어지게 되는데요. 이런 현상을 콜백 지옥 또는 콜백 헬(callback hell)이라고 합니다. 또는 지옥의 피라미드(Pyramid of Doom)라고도 합니다.

// 하지만 우리가 배웠던 대로 fetch 함수는 Promise 객체를 리턴하기 때문에

fetch('https://first.com')
  .then((response) => {
    // Do Something 
    return fetch('https://second.com');
  })
  .then((response) => {
    // Do Something 
    return fetch('https://third.com');
  })
  .then((response) => { 
    // Do Something 
    return fetch('https://third.com');
  });

//   이런 식으로 Promise Chaining을 해서 좀 더 깔끔한 코드로 여러 비동기 작업을 순차적으로 처리할 수 있는데요. 
// 이렇게 Promise 객체를 사용하면 callback hell 문제를 해결할 수 있습니다.

// 이 뿐만 아니라 기존에 콜백을 직접 넣는 방식에 비해 Promise 객체의 문법은 비동기 작업에 관한 좀 더 세밀한 개념들이 반영되어 있습니다. 이전의 방식에서는 콜백에 필요한 인자를 넣어주고 실행하면 되는 단순한 방식이었다면, Promise 객체 문법에는 pending, fulfilled, rejected 상태, 작업 성공 결과 및 작업 실패 정보(이유), then, catch, finally 메소드 등과 같은 비동기 작업에 관한 보다 정교한 설계가 문법 자체에 반영되어 있다는 것을 알 수 있습니다.

// 바로 이렇게 Promise 객체라는 개념은,

// (1) callback hell 문제를 해결하고, 이에 더해서 
// (2) 비동기 작업 처리에 관한 좀 더 세밀한 처리를 자바스크립트 문법 단에서 해결하기 위해 등장했고,

// 그 유명한 자바스크립트의 2015년도 표준인 ES6(=ES2015)에 추가되었습니다.

// 오늘날 Promise는 자바스크립트 비동기 실행에 있어서 아주 핵심적인 문법입니다. 나머지 내용도 열심히 공부해서 Promise를 마스터해봅시다.

