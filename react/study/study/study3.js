//jsx - js에서 html문법을 쓸수 있음

//--> class --> className 써!

/* 자바스크립트 class 사용
class B{
  a(){
    console.log('A!')
  }
}
*/

/*
ReactDOM.render(
  <p className="hello">안녕 나는 쫑이라고 해</p>,
  document.getElementById('root')
);
*/
/*
나머지는 쓰던데로 쓰면 되는데 
class : className 
for 태그 --> htmlFor
*/
/* 이벤트 헴들러도 달라
ex) onblur="" , onfocus="", onmousdown=""

---> onBlur="" , onFocus="", onMousDown="" 단어 첫글자는 대문자 --> 카멜케이스 기법
*/

// ReactDOM.render(
//   <form>
//     <label htmlFor="name">이름</label>
//     <input id="name" type="text"onBlur="" onFocus="" onMousDown="" ></input>
//   </form>,
//   document.getElementById('root')
// )

//작업시 하나로 감싸진 곳 즉 a 에서만 써야함
/*
ReactDOM.render(
 a
);
*/

// 또한

/* ex)
ReactDOM.render(
  <div>
    <p>안녕</p>
    <p>나는 쫑이라고 해</p>
  </div>,
  document.getElementById('root')
);


--> div 태그 없애려면?? Fragment 사용

ex)
ReactDOM.render(
  <Fragment> = <>
    <p>안녕</p>
    <p>나는 쫑이라고 해</p>
  </Fragment> = </>, 
  document.getElementById('root')
);
*/

/* jsx 문법에서 자바스크립트 코드 활용
1. {} -> 활용시 자바스크립트 표현식 사용
2. {} 안에 if,for,함수 선언과 같은 자바스크립트 문장을 사용불가
*/