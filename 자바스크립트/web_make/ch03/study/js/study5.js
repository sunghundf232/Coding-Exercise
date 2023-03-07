//catch 매소드 이해하기

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .catch((error) => { console.log(error); })
  .then((result) => { console.log(result); });

// 이전 영상에서는 다음과 같은 catch 메소드를 봤습니다. 그런데 어떻게 fetch 함수에서 발생한 에러가 catch 메소드 안의 콜백에까지 전달될 수 있는 걸까요? 사실 이 내용은 이전의 'then 메소드 완벽하게 이해하기' 노트를 잘 읽었다면 바로 이해할 수 있는 내용인데요. 지금 이 코드를 이렇게 수정해볼게요.

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(result); }); // Promise-D

// catch 메소드는 사실 then 메소드의 첫 번째 인자로 undefined을 넣은 것과 같다고 했죠? 그래서 catch 메소드를 then 메소드로 변환해봤습니다. 이 코드에서 fetch 함수와 각각의 then 메소드가 리턴하는 Promise 객체를 순서대로 Promise-A, B, C, D라고 합시다. 그리고 각각의 Promise의 상태가 어떻게 변하는지 살펴봅시다.

// 일단 fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 되면, 첫 번째 then 메소드의 두 번째 콜백이 실행되어야 합니다. 하지만 지금 첫 번째 then 메소드에는 두 번째 콜백이 없기 때문에 아무 콜백도 실행되지 않는데요. 이런 경우에는 어떻게 된다고 했죠? Promise-B 객체가 Promise-A와 똑같은 rejected 상태가 되고, 동일한 작업 실패 정보를 갖게 됩니다! 혹시 기억이 안 나면 'then 메소드 완벽하게 이해하기' 노트에서 4. 아무런 콜백도 실행되지 않을 때 부분을 보고 와주세요.

// 그럼 이제 rejected 상태가 된 Promise-B에 붙은 then 메소드에는 두 번째 콜백이 있기 때문에 이 두 번째 콜백이 실행됩니다. 즉, catch 메소드의 콜백이 실행되는 거죠. 어떻게 fetch 함수의 에러가 catch 메소드의 콜백에까지 전달될 수 있는지 이제 아시겠죠? then 메소드의 작동 원리만 잘 기억하고 있다면 딱히 어려운 내용은 아닙니다.

// 자, 그럼 보너스 문제를 하나 드릴게요. 이 코드를 실행하면 최종적으로 무엇이 출력될까요?

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(`Quiz: ${result}`); }); // Promise-D 

  // 방금 전과 동일한 코드이고, 대신 마지막 console.log에 Quiz:라는 단어가 붙어있습니다. 이 단어 옆의 result로 무엇이 출력되는지가 문제인데요. 코드를 실행해보면

//   undefined가 출력되네요. 왜 그런 걸까요?

// catch 메소드는 사실 then 메소드라고 했으니까 이것을 기억하면 이해할 수 있습니다. 지금 catch 메소드 안의 콜백이 실행되었을 때 무슨 값을 리턴했나요? 아무 값도 리턴하지 않았는데요. 이렇게 자바스크립트에서는 아무 값도 리턴하지 않은 경우에는 undefined를 리턴한 것으로 간주한다고 했었죠? 따라서 'then 메소드 완벽하게 이해하기' 노트에서 배운 것처럼 catch 메소드가 리턴한 Promise 객체는 fulfilled 상태가 되면서, undefined를 작업 성공 결과로 가지게 되는 겁니다. 그래서 그 뒤의 then 메소드의 콜백의 파라미터로 undefined가 넘어가서 undefined가 출력된 겁니다.

// 이렇게 결국 catch 메소드도 then 메소드의 실행 원리를 정확히 알아야 잘 해석할 수 있습니다. 혹시 이번 노트의 내용이 잘 이해가 되지 않는 분들이 있다면, 'then 메소드 완벽하게 이해하기' 노트를 보고 와주세요.