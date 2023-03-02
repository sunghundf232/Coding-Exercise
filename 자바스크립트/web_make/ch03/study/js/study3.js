//text, json 메소드도 Promise 객체를 리턴해요

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

/*
response 객체의 json 메소드로 리스폰스의 내용 추출과 Deserialize를 한 번에 수행(response.json())할 수 있다는 사실을 배웠습니다.

그런데 그 때 배우지 않았던 중요한 사실 하나가 있습니다. 그것은 바로 이 text 메소드와 json 메소드가 사실은 Promise 객체를 리턴하는 메소드라는 사실입니다. 이게 무슨 말인지 하나씩 설명해드릴게요.

1. text 메소드
fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 문장이 조금 기니까 반복해서 읽어보세요. 이때 그 작업 성공 결과는 string 타입인데요. 이때 그 값이 만약 JSON 데이터라면 이전에 배운 것처럼 JSON 객체의 parse 메소드로 Deserialize를 해줘야합니다.(JSON.parse(result);)

2. json 메소드
fetch 함수로 리스폰스를 잘 받으면, response 객체의 json 메소드는, fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 만약 리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 됩니다.

자, 이때까지 우리가 계속 봐온 response 객체의 text 메소드와 json 메소드가 사실 Promise 객체를 리턴하는 메소드였다는 사실, 놀랍죠?

바로 이 내용을 이전 영상에서 배웠던 내용인 'then 메소드가 리턴했던 Promise 객체(A)는 그 콜백에서 리턴한 Promise 객체(B)와 동일한 상태와 결과를 갖게 된다'는 규칙과 연관지어서 생각해봅시다. 이 말은 곧, 콜백에서 리턴한 Promise 객체로부터 새로운 Chain이 시작된다는 말과도 같은데요.

이때문에 response 객체의 text 메소드 또는 json 메소드 이후에 등장하는 then 메소드부터는 string 타입의 값이나 자바스크립트 객체를 갖고 바로 원하는 작업을 할 수 있는 겁니다. text, json 메소드가 Promise 객체를 리턴하는 메소드라는 사실, 잘 기억하세요!
*/