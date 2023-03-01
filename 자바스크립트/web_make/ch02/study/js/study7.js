// 2. Content-Type 설정해보기
// 이번에는 리퀘스트를 보낼 때 직접 Content-Type 헤더의 값을 설정해보겠습니다. 이전에 새로운 직원 정보를 추가하기 위해 썼던 코드를 재사용할 건데요.

const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('http://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });

  //이제 여기에 Content-Type 헤더도 설정해보겠습니다.

  const newMember1 = {
    name: 'Jerry',
    email: 'jerry@codeit.kr',
    department: 'engineering',
  };
  
  fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    headers: { // 추가된 부분
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMember1),
  })
    .then((response) => response.text())
    .then((result) => { console.log(result); });

    // 지금 fetch 함수의 옵션 객체 안에 headers라는 프로퍼티를 만들어서 객체 하나를 설정하고 그 객체 안에 'Content-Type'이라는 프로퍼티를 설정했습니다. 프로퍼티의 값으로는, 리퀘스트의 바디에 담을 데이터가 JSON 데이터라는 뜻으로 application/json을 적었습니다.

    // 이 코드를 개발자 도구에서 실행해보면

    /*

이렇게 리퀘스트의 헤더들 중에서 제가 설정한 Content-Type 헤더가 잘 보입니다.



이번 노트에서는 리퀘스트에 Content-Type 헤더를 추가하는 법을 배웠습니다. 앞으로 여러분이 점점 더 다양한 헤더들을 공부하게 된다면,

(1) fetch 함수의 옵션 객체 안에 headers 프로퍼티를 설정하고
(2) headers 객체 안에 더 많은 헤더 이름들을 추가해볼 수 있겠죠?

만약 Content-Type 헤더뿐만 아니라 수많은 다른 헤더들에 대해서도 공부해보고 싶은 분들은 이 링크를 참조하세요. 헤더에 대해서 공부를 하면 실무 웹 개발에서 어떤 점들이 중요한지를 파악할 수 있게 될 겁니다. 당장 헤더들을 공부하면서 이해가 안 된다면, 일단은 넘어가시고 나중에 실제로 개발을 하다가 문제가 생기면 그때 관련 헤더에 대해서 자세하게 공부해보는 것도 좋습니다.

이번 레슨은 어땠
    */