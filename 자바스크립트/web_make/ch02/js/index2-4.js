// 요청 --> Request

/* 종류 - method 따라 메소드 알수 있어

1. 데이터 조회 : GET   --> GET Request

2. 데이터 추가 : POST  --> POST Request

3. 데이터 수정 : PUT  -->  PUT Request --> body 필요x

4. 데이터 삭제 : DELETE  --> DELETE Request --> body 필요x

*/

//Request의 Head 와  Body

// 웹에서 사용되는 HTTP의 프로토콜에는 여러 버전이 있습니다. 현재 시중의 서비스들에서는 1.1 버전과 2.0 버전이 주로 사용되고 있는데요. 
// 각 버전에서 리퀘스트의 헤드에 관한 구체적인 표현이 조금 다릅니다.

// http/1.1에서는 method와 path의 경우

// GET /men/shirts HTTP/1.1 
// 헤더 1: 값
// 헤더 2: 값
// 헤더 3: 값 
// ...

// 이런 식으로 가장 첫 번째 줄에 별도의 형식을 갖고 표시됩니다. 이를 start-line이라고 하는데요. 
// http/2에서는 start-line 대신에, method와 path를 일종의 가상 헤더(pseudo header)로 표현합니다. 가상 헤더 앞에는 콜론(:)이 붙어있는데요.

// ...
// :method: GET
// :path: /men/shirts
// ...
// 헤더 1: 값
// 헤더 2: 값
// 헤더 3: 값
// ...


/*
Request 

  Head
    1. Request에 대한 부가 정보 -> ex) 메소드

  Body

    1. 실제 데이터를 담는 부분 -> Request를 보낼때 데이터도 보내줘야 한다면 body에 담아서 보내야 함
    ex) post,put --> 나머지는 head만 있으면 됨

*/

fetch('https://www.google.com')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});

// 다른 정보도 볼수 있어 - JSON : 어떤 정보를 나타낼때 사용

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});


//fetch 함수로 Request 요청 보내기
