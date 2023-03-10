// Promise 객체를 배울 때는 then 메소드에 관해서만 확실히 알면 딱히 어려운 내용이 없습니다. 이번 노트에서는 Promise의 then 메소드에 관한 규칙을 제대로 깊이있게 배워봅시다.

// 잠깐 이 코드를 보세요.

const successCallback = function () { };
const errorCallback = function () { };

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then(successCallback, errorCallback); // Promise-B

/*
이때까지 배운 내용을 바탕으로 이 코드를 해석해봅시다. 일단, 이 코드에서

(1) fetch 메소드가 리턴하는 Promise 객체를 Promise-A 객체라고 하고, 
(2) then 메소드가 리턴하는 Promise 객체를 Promise-B 객체라고 해봅시다.

그리고 fetch 함수의 작업이 성공하는 경우와 실패하는 경우로 나누어서 생각해보겠습니다.

fetch 함수의 작업이 성공해서 Promise-A 객체가 fulfilled 상태가 된 경우 : then 메소드 안의 "첫 번째" 콜백인 successCallback이 실행됩니다.
fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 된 경우 : then 메소드 안의 "두 번째" 콜백인 errorCallback이 실행됩니다.
자, 여기서 중요한 점은 Promise-B는, 실행된 successCallback 또는 errorCallback에서 무엇을 리턴하느냐에 따라

그 상태(fulfilled or rejected)와
결과(작업 성공 결과 or 작업 실패 정보)가
결정된다는 점입니다.

이번 노트에서는 then 메소드가 리턴한 Promise 객체가, 콜백이 리턴하는 값에 따라 어떻게 달라지는지 경우를 나누어서 다뤄볼 겁니다. 이전 영상에서 배운 내용도 있고, 새롭게 배우는 내용도 있으니까 집중해서 잘 읽어보세요.

1. 실행된 콜백이 어떤 값을 리턴하는 경우
successCallback이 실행되든, errorCallback이 실행되든, 실행된 콜백에서 어떤 값을 리턴하는 경우입니다. 이때 그 값의 종류에 따라

Promise 객체인 경우와
Promise 객체 이외의 경우,
이 2가지 경우로 다시 나눌 수 있습니다.
*/

//(1) Promise 객체를 리턴하는 경우

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) });

//   위 코드에서 (response) ⇒ response.json() 이 콜백은 Promise 객체를 리턴하는 코드입니다. response 객체의 json 메소드가 Promise 객체를 리턴한다는 사실은 [(1)이전 노트]에서 배웠죠? 이렇게 콜백에서 Promise 객체를 리턴하는 경우에는 그 콜백을 등록한 then 메소드가 리턴했던 Promise 객체가 콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이 따라 갖게 됩니다. 즉, 위 코드의 첫 번째 then 메소드가 리턴했던 Promise 객체는, response 객체의 json 메소드가 리턴한 Promise 객체가 추후에 갖게 되는 상태와 결과를 그대로 따라서 갖게 된다는 뜻입니다.

// 좀 더 편하게 기억하기 위해서는 그냥 콜백에서 리턴하는 Promise 객체를 then 메소드가 그대로 리턴한다고 생각하셔도 됩니다. 그럼 이제 그 다음부터는 콜백에서 리턴한 Promise 객체로부터 다시 Promise Chain이 쭉 이어져 나간다고 보면 되죠.


//(1)이전노트 참고

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    // ...
  });

console.log('End');

// 이전 챕터에서는 위 코드에서 보이는 것처럼 response 객체의 text 메소드로 리스폰스의 내용을 추출(response.text();)하고 이것을 Deserialize하거나(JSON.parse(result);)

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    // ...
  });

console.log('End');

// response 객체의 json 메소드로 리스폰스의 내용 추출과 Deserialize를 한 번에 수행(response.json())할 수 있다는 사실을 배웠습니다.

// 그런데 그 때 배우지 않았던 중요한 사실 하나가 있습니다. 그것은 바로 이 text 메소드와 json 메소드가 사실은 Promise 객체를 리턴하는 메소드라는 사실입니다. 이게 무슨 말인지 하나씩 설명해드릴게요.

/*
1. text 메소드
fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 문장이 조금 기니까 반복해서 읽어보세요. 이때 그 작업 성공 결과는 string 타입인데요. 이때 그 값이 만약 JSON 데이터라면 이전에 배운 것처럼 JSON 객체의 parse 메소드로 Deserialize를 해줘야합니다.(JSON.parse(result);)

2. json 메소드
fetch 함수로 리스폰스를 잘 받으면, response 객체의 json 메소드는, fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 만약 리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 됩니다.

자, 이때까지 우리가 계속 봐온 response 객체의 text 메소드와 json 메소드가 사실 Promise 객체를 리턴하는 메소드였다는 사실, 놀랍죠?

바로 이 내용을 이전 영상에서 배웠던 내용인 'then 메소드가 리턴했던 Promise 객체(A)는 그 콜백에서 리턴한 Promise 객체(B)와 동일한 상태와 결과를 갖게 된다'는 규칙과 연관지어서 생각해봅시다. 이 말은 곧, 콜백에서 리턴한 Promise 객체로부터 새로운 Chain이 시작된다는 말과도 같은데요.

이때문에 response 객체의 text 메소드 또는 json 메소드 이후에 등장하는 then 메소드부터는 string 타입의 값이나 자바스크립트 객체를 갖고 바로 원하는 작업을 할 수 있는 겁니다. text, json 메소드가 Promise 객체를 리턴하는 메소드라는 사실, 잘 기억하세요!

*/

//다시 돌아와

/*
(2) Promise 객체 이외의 값을 리턴하는 경우
콜백이 꼭 Promise 객체만을 리턴하는 것은 아니겠죠? 그냥 단순한 숫자, 문자열, 일반 객체 등을 리턴할 수도 있는데요. 이런 경우에 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고 작업 성공 결과로 그 값을 갖게 됩니다.
*/

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => 'Try again!')
  .then((result) => { console.log(result) });

// 예를 들어, 지금 인터넷이 안 되는 상황에서 이 코드를 실행했다고 해봅시다. 그럼 fetch 함수의 작업이 실패해서 두 번째 콜백인 (error) ⇒ 'Try again! 이 실행되겠죠? 두 번째 콜백은 'Try again!'이라는 문자열을 리턴하고 있는데요. 이렇게 하면 해당 콜백을 등록한 then 메소드가 리턴했던 Promise가 fulfilled 상태가 되고, 그 작업 성공 결과로 'Try again' 문자열을 갖게 됩니다.

// 자, 이때까지는 이전 영상들에서 모두 배운 내용들입니다. 아래부터는 조금 색다른 규칙들이 등장합니다. 집중해서 읽어봅시다.

//2. 실행된 콜백이 아무 값도 리턴하지 않는 경우

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => { alert('Try again!'); })
  .then((result) => { console.log(result) });

// 방금 전과 같은 상황에서 콜백이 무언가를 리턴하는 게 아니라 이 코드에서처럼 단순히 alert 함수만 실행하고 끝난다고 해봅시다. 그럼 결과적으로 이 콜백은 아무런 값도 리턴하지 않은 것과 같은데요. 자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주됩니다. 따라서 방금 전 1. (2) 규칙에 따라 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 그 작업 성공 결과로 undefined를 갖게 됩니다.

// 3. 실행된 콜백 내부에서 에러가 발생했을 때
// 콜백이 실행되다가 에러가 발생하는 경우가 있습니다. 예를 들어

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        add(1, 2); // ReferenceError 발생
        ... 
  });

  // 이렇게 정의하지도 않은 함수를 콜백에서 사용해서 에러가 발생하거나

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        throw new Error('failed'); 
        ... 
  });


  // 특정 경우에 인위적으로 throw 문을 써서 에러를 발생시키는 경우도 있을 겁니다.

  // 이렇게 콜백이 실행되다가 에러가 발생한다면, then 메소드가 리턴했던 Promise 객체는 어떻게 될까요? 이 경우에는 Promise 객체가 rejected 상태가 되고, 작업 실패 정보로 해당 에러 객체를 갖게 됩니다. 잠깐 아래의 코드를 개발자 도구에서 실행해보겠습니다.  

  const promise = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { throw new Error('test'); });

  //promise 를 입력하여 then 메소드가 리턴한 Promise 객체의 내부를 살펴보면 이렇게 생겼는데요.

  
// 지금 [[PromiseState]]는 Promise 객체의 상태를, [[PromiseResult]]는 Promise 객체의 결과(작업 성공 결과 또는 작업 실패 정보)를 나타내는 내부 슬롯입니다.(내부 슬롯이란 자바스크립트 실행 엔진에서 내부적으로 관리하는 속성이라고 생각하시면 됩니다. 지금 당장 알아야할 내용은 아니니 Promise 객체에 집중합시다)
// 자세히 보면 현재 Promise 객체가 rejected 상태이고, 발생한 Error 객체를 그 작업 실패 정보로 갖고 있다는 것을 알 수 있습니다. 이렇게 콜백 실행 중에 에러가 발생하면, then 메소드가 리턴한 Promise 객체는 rejected 상태가 되고, 그 작업 실패 정보로 해당 Error 객체를 갖게 된다는 점, 잘 기억하세요!


// 4. 아무런 콜백도 실행되지 않을 때

// Internet Disconnected

fetch('https://www.google.com') // Promise-1
  .then((response) => response.text()) // Promise-2
  .then((result) => { console.log(result) }, (error) => { alert(error) }

  // then 메소드의 아무런 콜백도 실행되지 않는 경우가 있습니다. 지금 인터넷을 끊고 나서 위 코드를 실행했다고 합시다. 그럼 fetch 함수가 리턴한 Promise-1 객체는 rejected 상태가 되기 때문에, 첫 번째 then 메소드의 두 번재 콜백이 실행되어야 합니다. 그런데 지금 두 번째 콜백이 없죠? 이런 경우에는 아무런 콜백도 실행되지 않는데요. 이런 경우에 then 메소드가 리턴한 Promise-2 객체는 어떻게 될까요? 이런 경우에 then 메소드가 리턴했던 Promise-2 객체는, 이전 Promise 객체와 동일한 상태와 결과를 갖게 됩니다. 그러니까 지금 Promise-2 객체는 Promise-1 객체처럼 rejected 상태가 되고, 똑같은 작업 실패 정보를 갖게 됩니다.

  // 그럼 rejected 상태가 된 Promise-2의 then 메소드에는 이제 두 번째 콜백이 존재하기 때문에 그 두 번째 콜백이 실행됩니다. 이렇게 아무런 콜백도 실행되지 않는 경우에는 그 이전 Promise 객체의 상태와 결과가 그대로 이어진다는 사실, 잘 기억하세요. 
  
  
  // 자, 이때까지 Promise 객체의 then 메소드가 리턴한 Promise 객체의 상태가, then 메소드 안의 콜백이 리턴하는 값에 따라 무슨 상태와 결과를 갖게 되는지 배웠는데요. 사실 위의 내용을 이해하지 못해도, Promise 객체를 당장 사용하는 데는 문제가 없을 수도 있습니다. 하지만 나중에 Promise 객체를 사용하는 코드에서 문제가 생기거나 고난이도의 코드를 작성해야 할 때는 이런 기본적인 규칙을 모르면 내가 무엇을 잘못했는지조차 알 수 없게 됩니다. 따라서 이번에 배울 때 제대로 배우고 넘어갑시다.
  
  // 위의 내용을 이해될 때까지 반복해서 읽어보세요. 그래야 다음에 나오는 내용들을 잘 이해할 수 있습니다.  

