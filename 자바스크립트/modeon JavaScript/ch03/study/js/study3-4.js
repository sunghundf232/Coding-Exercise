//지난 시간에 다양한 객체의 프로퍼티 표기법에 대해 살펴봤는데요. 이번에는 안전하게 프로퍼티에 접근하는 방법에 대해서 살펴보겠습니다.

//옵셔널 체이닝 (Optional Chaining)
// 바로 ECMAScript2020에서 등장한 옵셔널 체이닝이라는 접근 방법입니다. 일반적으로 객체의 프로퍼티는 점 표기법을 통해서 접근하게 되는데요.

// 아래 코드를 잠시 살펴봅시다.

function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

printCatName(user1); // Crew

/*
객체를 활용해서 데이터를 표현하다 보면 이렇게 중첩된 객체를 작성하게 될 일이 빈번하고, 함수에서도 이런 중첩 객체의 프로퍼티를 활용할 일이 많은데요.
중첩된 객체의 프로퍼티에 접근하는 방법은 이미 다 알고 계시죠? 함수 printCatName은 user 파라미터에 중첩된 cat객체의 name 프로퍼티를 콘솔에 출력해주는 함수입니다.

그런데, 이렇게 중첩 객체를 다룰 때 한가지 조심해야 될 부분이 있습니다.
*/

function printCatName(user) {
  console.log(user.cat && user.cat.name);
};

/*
여러 가지 상황에 맞춰 데이터를 다루다 보면 때로는 우리가 예상한 프로퍼티를 가지고 있지 않을 수도 있는데요.
cat 프로퍼티를 가지고 있지 않은 user2는 cat 프로퍼티가 undefined이기 때문에 user2.cat.name에 접근하려는 순간 에러가 발생하게 됩니다.

그래서 printCatName과 같이 중첩된 객체의 프로퍼티를 다룰 때는 user.cat.name에 접근하기 전에 user.cat이 null 혹은 undefined가 아니라는 것을 검증하고 접근해야 에러를 방지할 수가 있는데요.
*/

function printCatName(user) {
  console.log(user.cat && user.cat.name);
};

/*
if문을 활용할 수도 있지만, 일반적으로는 간결하게 AND 연산자를 활용해서 이 문제를 해결하곤 했었습니다.
그런데 이마저도 객체의 이름이나 프로퍼티의 이름이 길어질수록 가독성이 나빠지는 문제가 있는데요, 이런 상황에 훨씬 더 코드를 간결하게 사용할 수 있는 문법이 바로 옵셔널 체이닝(Optional Chaining)입니다.
*/

function printCatName(user) {
  console.log(user.cat?.name);
};

/*
위 코드에서 볼 수 있는 것처럼 물음표와 마침표를 붙여 사용하는 부분이 바로 옵셔널 체이닝 연산자(?.)인데요.
만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 그다음 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined를 반환하는 문법입니다.

옵셔널 체이닝 연산자의 동작 원리를 삼항 연산자를 통해 구체적으로 표현하면 다음과 같이 작성할 수 있는데요.
*/

function printCatName(user) {
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
};

// 이렇게 보니 옵셔널 체이닝 연산자가 어떻게 동작하는지 이해가 되죠?
// 이전에 배운 null 병합 연산자와 함께 활용하면 다음과 같이 응용할 수도 있습니다.

function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

const user2 = {
  name: 'Young',
}

printCatName(user2); // 함께 지내는 고양이가 없습니다.

// 이후 레슨에서 자세히 다루겠지만 자바스크립트에서 에러를 방지하는 일은 굉장히 중요한데요.
// 중첩된 객체를 다룰 때 에러를 방지하기 위해 다양한 방식을 활용할 수 있지만 옵셔널 체이닝 연산자를 활용하면 훨씬 더 간결하게 코드를 작성할 수 있다는 점! 잘 기억해 두세요!