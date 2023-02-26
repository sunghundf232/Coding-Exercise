const title = 'Module';

const printer = (value) => {
  console.log(value);
};

const arrPrinter = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  })
};

export default { title, printer, arrPrinter };

// 그리고 import도 import 키워드 이후에 중괄호를 감싸면, 아래 코드 처럼 모듈 파일에서 export하는 항목들을 선택적으로 불러올 수 있고

import { title, data } from './modules.js';

// as 키워드를 통해서 아래 코드 처럼 이름을 바꿀 수도 있었죠?

import { title as moduleTitle, data } from './modules.js';

// 뿐만 아니라 와일드카드 문자(*)를 통해서 아리 코드 처럼 export된 항목들을 모두 불러올 수도 있었습니다.

import * as modules from './modules.js';

//그리고 아래 코드 처럼 default export된 대상을 import할 때는

import { defult as modules } from './modules.js';

//아래 처럼 축약형으로 불러올 수 있다는 부분도 살펴봤었습니다.

import modules from './modules.js';

//심지어 이러한 방식들을 잘 응용하면,

// (modules.js)
import module1 from './sub-module1.js';
import module2 from './sub-module2.js';
import module3 from './sub-module3.js';

export { module1, module2, module3 };

// index.js
import { module1, module2, module3 } from 'modules.js';

// 위 코드들 처럼 여러 개의 기능으로 잘게 나누어진 모듈을 import한 다음 다시 export하는 모듈 파일을 만들 수 있는데요. 비슷한 특징을 가진 여러 모듈 파일들을 다시 하나의 모듈 파일로 만들 수 있어서 파일 관리를 유용하게 할 수 있도록 도와줍니다.

// 모듈 문법은 나중에 여러분들이 자바스크립트를 기반으로 한 라이브러리나 프레임워크를 사용할 때 꼭 필요할 정도로 정말 많이 활용되기 때문에 다양한 상황들을 경험해보고 어떤 방식으로 풀어나갈지 고민하는 것이 중요한데요.

// 행여나 자바스크립트 코드만 다룬다고 하더라도 조금 더 효율적인 코드 작성을 위해서도 굉장히 중요한 부분이기 때문에 처음에는 다양한 표현방식 가능하다는 점이 꽤 혼란스러울 수도 있지만, 여러 번 복습을 통해서라도 잘 이해해 두시는 걸 권장해 드립니다!