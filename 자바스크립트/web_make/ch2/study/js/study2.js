//  자바스크립트 객체 표기법과 JSON 문법의 차이

/*
1. JSON에는 프로퍼티의 이름과 값을 표현하는 방식에 제한이 있습니다.
(1) JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표(")로 감싸줘야 합니다.
잠깐 자바스크립트 코드로 member라는 객체를 생성해볼까요?

*/

const member = {
  name: 'Michael Kim',
  height: 180,
  weight: 70,
  hobbies: ['Basketball', 'Listening to music']
};

// 자바스크립트에는 객체를 생성할 수 있는 여러 가지 방법이 있는데요. 그중 한 가지는 이런 식으로 중괄호('{ }') 안에 객체의 프로퍼티의 이름(키)과 값(밸류)쌍을 순서대로 나열해서 생성하는 방법입니다. 지금 보이는 표기를 Object Literal이라고 하는데요. Object Literal을 쓸 때는 문법에 약간의 유연함이 있습니다. 저는 지금 member 객체의 각 프로퍼티의 이름인 name, height, weight, hobbies에 큰따옴표를 붙이지 않았는데요. Object Literal에서는 이렇게 프로퍼티의 이름에 큰따옴표를 붙이지 않아도 되고,

const member1 = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};

// 이렇게 큰따옴표를 붙여도 됩니다.

// 하지만 JSON의 경우에는 프로퍼티의 이름에 반드시 큰따옴표를 붙여줘야만 합니다.

/*
{
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};

--> 지금 각 프로퍼티의 이름이 모두 큰따옴표로 둘러싸여 있죠? 이렇게 JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표로 감싸주어야 합니다. 큰따옴표로 감싸주지 않으면 JSON을 처리하려고 할 때 에러가 납니다.

*/

//(2) JSON에서는 값이 문자열인 경우 큰따옴표(")를 사용해야 합니다.

const member2 = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};

// 잠깐 member2 객체를 다시 볼게요. 지금 name 프로퍼티의 값으로 'Michael Kim'이라는 문자열이 들어가 있죠? 자바스크립트에서는 문자열을 나타낼 때, 이렇게 작은따옴표(')를 써도 되고, 큰따옴표(")를 써서 "Michael Kim"이라고 써도 됩니다.

//하지만 JSON에서는 문자열 값을

{
  "name":"Michael Kim",
  "height":180,
  "weight":70,
  "hobbies":["Basketball", "Listening to music"]
}
// 지금 보이는 "Michael Kim", "Basketball", "Listening to music"처럼 항상 큰따옴표로 감싸서 적어줘야만 합니다.

// 2. JSON에서는 표현할 수 없는 값들이 있습니다.
// 자바스크립트에서는 프로퍼티의 값으로 사용할 수 있는 undefined, NaN, Infinity 등을 JSON에서는 사용할 수 없습니다. 참고로, JSON은 비록 자바스크립트로부터 비롯된 데이터 포맷이지만, 그 탄생 목적은 언어나 환경에 종속되지 않고, 언제 어디서든 사용할 수 있는 데이터 포맷이 되는 것이었습니다. 따라서 자바스크립트의 문법에서만 유효한 개념을 JSON에서는 나타낼 수 없다는 것은 어찌 보면 당연한 결과입니다.

// 3. JSON에는 주석을 추가할 수 없습니다.
// JSON은 코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없습니다.


// 자, 이때까지 자바스크립트의 문법과 JSON 문법 간의 미세한 차이를 배워봤는데요. 이 둘은 일반적으로 호환되는 것이 맞지만, 위에서 살펴본 세부적인 차이가 있다는 점을 알아두는 게 좋습니다. 이런 차이가 있다는 것을 모르면, 나중에 실무에서 JSON 데이터를 처리하다가 에러가 생겨도, 그 이유를 이해할 수 없기 때문입니다.

// 자바스크립트 문법과 JSON 문법 간의 차이가 더 궁금한 분들은 이 링크를 참조하세요.