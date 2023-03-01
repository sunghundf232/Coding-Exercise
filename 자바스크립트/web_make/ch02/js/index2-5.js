/*

이제 우리는 웹 브라우저가 서버로 보내는 리퀘스트의 종류에 크게 다음과 같은 4가지 종류가 있다는 걸 배웠습니다.

기존 데이터를 조회하는 리퀘스트 - GET
새 데이터를 추가하는 리퀘스트 - POST
기존 데이터를 수정하는 리퀘스트 - PUT
기존 데이터를 삭제하는 리퀘스트 - DELETE
그리고 각 리퀘스트의 종류에 따라 리퀘스트의 헤드에, 오른쪽에 써있는 각각의 method(메소드)를 설정해야 한다는 것도 배웠는데요.

다음 영상부터는 이때까지 우리가 해온 GET 리퀘스트 뿐만 아니라 POST 리퀘스트, PUT 리퀘스트, DELETE 리퀘스트도 차례대로 직접 수행해볼 겁니다. 그리고 이를 위해서 코드잇에서 제공하는 다음과 같은 학습용 URL을 사용할 건데요.

*/

//학습용 URL : https://learn.codeit.kr/api/members

/*
--> 
[ { "id": 1, "name": "Jason", "email": "jason@codeitmall.kr", "department": "engineering" }, { "id": 2, "name": "Alice", "email": "alice@codeitmall.kr", "department": "engineering" }, { "id": 3, "name": "Brian", "email": "brian@codeitmall.kr", "department": "marketing" }, { "id": 4, "name": "Erica", "email": "erica@codeitmall.kr", "department": "marketing" }, { "id": 5, "name": "Wilson", "email": "wilson@codeitmall.kr", "department": "sales" } ]
*/

// 이 URL을 사용해서 다음과 같은 작업들을 순차적으로 진행해볼 겁니다.

// (1) 전체 직원 정보 조회 - GET 
// (2) 특정 직원 정보 조회 - GET 
// (3) 새 직원 정보 추가 - POST
// (4) 기존 직원 정보 수정 - PUT
// (5) 기존 직원 정보 삭제 - DELETE

// 각 작업을 위해 리퀘스트의 헤드에 무슨 메소드를 설정해야하는지 기억해두세요.

// 그리고 마지막으로 한 가지 더 기억해야할 중요한 내용이 있습니다. 그건 위의 5가지 작업을 수행할 때 사용하는 URL의 유형에 크게 2가지가 있다는 점입니다.

// 위의 5가지 작업 중

// (2) 특정 직원 정보 조회 - GET
// (4) 기존 직원 정보 수정 - PUT
// (5) 기존 직원 정보 삭제 - DELETE

// 이 작업들을 수행할 때는 작업의 대상이 되는 직원 정보를 특정할 수 있도록 URL 끝에 아래와 같은 고유 식별자를 붙여줘야 합니다. (직원의 id 값입니다.)

// https://learn.codeit.kr/api/members/3
// 지금 이 URL은 3번 직원 정보에 대한 작업을 수행하겠다는 뜻입니다. 이렇게 작업의 종류에 따라 메소드뿐만 아니라 URL도 적절하게 변경해가며 써줘야 합니다.

/* -->
{ "id": 3, "name": "Brian", "email": "brian@codeitmall.kr", "department": "marketing" }
*/

// 그리고 나머지 작업인

// (1) 전체 직원 정보 조회 - GET 
// (3) 새 직원 정보 추가 - POST

// 들은 특정 직원 정보를 대상으로 수행하는 작업이 아니라 아니라 전체 직원 정보에 대해서 수행하는 작업이기 때문에

// https://learn.codeit.kr/api/members

/* --->
[ { "id": 1, "name": "Jason", "email": "jason@codeitmall.kr", "department": "engineering" }, { "id": 2, "name": "Alice", "email": "alice@codeitmall.kr", "department": "engineering" }, { "id": 3, "name": "Brian", "email": "brian@codeitmall.kr", "department": "marketing" }, { "id": 4, "name": "Erica", "email": "erica@codeitmall.kr", "department": "marketing" }, { "id": 5, "name": "Wilson", "email": "wilson@codeitmall.kr", "department": "sales" } ]
*/


// /members로 끝나는 원래의 URL을 그대로 사용하면 됩니다.

// 이 내용을 잘 기억해두고 다음 영상으로 갑시다.