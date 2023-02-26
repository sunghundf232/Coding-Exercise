// reivew and test

// 그동안 배운 문법만 되돌아봐도 모듈 문법은 정말 다양한 방식으로 작성될 수가 있습니다.
// export를 할 때도 선언문을 export하거나

export const title = 'Module';

//선언된 변수나 함수를 코드 블록으로 묶어서 export할 수도 있고,

const printer1 = (value) => {
  console.log(value);
};

const arrPrinter1 = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  })
};

export { printer1, arrPrinter1 };

//때로는 as 키워드를 통해 이름을 변경해서 export를 할 수도 있었죠?

const printer = (value) => {
  console.log(value);
};

const arrPrinter = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  })
};

export { printer as namedPrinter, arrPrinter };

//그리고 default 키워드를 통해 표현식을 export하는 방법도 배우면서,

const title = 'Module';

export default title;

// 위 코드 처럼 단순히 하나의 대상을 export하는 것뿐만 아니라 아래 코드처럼 여러 대상을 객체 값으로 모아 내보내는 방식도 가능하다는 것도 배웠습니다.

