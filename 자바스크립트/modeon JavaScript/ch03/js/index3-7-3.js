//구조분해9(Destructuring) - es2015 - 배열,객체 문법을 분해하는 문법

// 객체 활용 - 프로퍼티 네임으로 구분
// 매번 객체 작성 x -> 간결하게 프로퍼티 네임자체 변수처럼 사용

// 함수와 사용하여 복습하기

// 객체로 활용해보기 - 함수가 객체를 리턴시 사용가능


const btn = document.querySelector('#btn');

 btn.addEventListener('click',(event)=>{
  event.target.classList.toggle('checked');
 });

 console.log('===')

//이벤트를 다룰때도 유용하게 다뤄 - target만 사용시 함수 내부 간결하게 사용가능

btn.addEventListener('click',({target})=>{
  target.classList.toggle('checked')
 });

 console.log('===')

//({target}) : 콜론 기호를 가지고 한범더 분해하는 방식으로 할수 있따.
//가독성도 해치고 참고만 해

btn.addEventListener('click',({target:{classList}})=>{
  classList.toggle('checked')
});

console.log('====');

btn.addEventListener('click',({target})=>{
  const {classList} = target;
  classList.toggle('checked')
})

//중첩 객체 구조분해 학습해!!! - 객체나 배열이 다른 객체나 배열을 포함하는 경우, 좀 더 복잡한 패턴을 사용하면 중첩 배열이나 객체의 정보를 추출할 수 있습니다. 이를 중첩 구조 분해(nested destructuring)라고 부릅니다.

// 아래 예시에서 객체 options의 size 프로퍼티 값은 또 다른 객체입니다. items 프로퍼티는 배열을 값으로 가지고 있습니다. 대입 연산자 좌측의 패턴은 정보를 추출하려는 객체 options와 같은 구조를 갖추고 있습니다.

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
  size: { // size는 여기,
    width,
    height
  },
  items: [item1, item2], // items는 여기에 할당함
  title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

//위 예시에서 size 와 items 전용 변수는 없다는 점 유의