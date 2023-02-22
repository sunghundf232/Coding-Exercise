/*
Map과 Set

객체는 property name을 통해 이름이 있는 여러 값들을 묶을 때 활용할 수 있고,
배열은 index를 통해 순서가 있는 여러 값들을 묶을 때 유용하게 활용할 수 있습니다.

그런데 ES2015에서 객체와 비슷한 Map과 배열과 비슷한 Set이라는 데이터 구조가 새롭게 등장했는데요.
각각 어떤 특징들을 가지고 있는지 간단하게 살펴보도록 합시다.
*/

/*
Map

Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷합니다.
하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 
Map은 메소드를 통해서 값을 추가하거나 접근할 수 있는데요.

new 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

map.set(key, value): key를 이용해 value를 추가하는 메소드.
map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
map.delete(key): key에 해당하는 값을 삭제하는 메소드.
map.clear(): Map 안의 모든 요소를 제거하는 메소드.
map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
*/

// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0

// 문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게
// Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있습니다.

/*
Set

Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷합니다.
하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있는데요.

Map과 마찬가지로 new 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
set.clear(): Set 안의 모든 요소를 제거하는 메소드.
set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
*/

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

// 한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, Map은 get메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데요.
// 한 가지 특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점입니다.

// Set 생성
const members1 = new Set();

// add 메소드
members1.add('영훈'); // Set(1) {"영훈"}
members1.add('윤수'); // Set(2) {"영훈", "윤수"}
members1.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members1.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members1) {
  console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}

// 그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있습니다.
// 그런데, 이런 특징을 가지고도 Set이 유용하게 사용되는 경우가 있는데요.
// 바로, 중복을 허용하지 않는 값들을 모을 때입니다.

// Set은 중복되는 값을 허용하지 않는 독특한 특징이 있는데요.

// Set 생성
const members2 = new Set();

// add 메소드
members2.add('영훈'); // Set(1) {"영훈"}
members2.add('윤수'); // Set(2) {"영훈", "윤수"}
members2.add('영훈'); // Set(2) {"영훈", "윤수"}
members2.add('영훈'); // Set(2) {"영훈", "윤수"}
members2.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members2.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members2.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members2.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members2.add('동욱'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members2.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members2.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// 최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시하는 특징이 있습니다.

// 처음 Set을 생성할 때 아규먼트로 배열을 전달할 수도 있는데요.
// 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용하기도 합니다.

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}