fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

//   이전 영상에서는 fetch 함수로 리퀘스트를 보내고, 리스폰스를 받아서 그 내용을 출력해봤습니다. fetch 함수의 실행 원리를 다시 정리하자면,

//1. fetch 함수는 어떤 객체를 리턴하는데(Promise 객체, 챕터 3에서 배웁니다)
// 2. 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있습니다.
// 3. 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있는데요.

//위 코드처럼 적지 않고 그냥

fetch('https://www.google.com')
  .then((response) => { console.log(response); });

  // '이렇게 코드를 적어도 리스폰스의 내용을 출력할 수 있지 않나요?' 라는 의문을 가지셨을 수도 있는데요.

  // 사실 이 response 파라미터로는 리스폰스의 실제 내용 자체가 넘어오는 게 아닙니다. response 파라미터에는, 리스폰스에 관한 각종 부가 정보들과, 실제 내용을 함께 갖고 있는 하나의 객체(object)가 넘어오는데요. 그래서 우리가 원하는 리스폰스의 실제 내용을 보려면,