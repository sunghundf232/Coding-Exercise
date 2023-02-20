// const title = '컴퓨터 개론';
// const lessonCount = 87;

// const course = {
//   title;
//   lessonCount;
// };
//위에 예시 정답
//  사용할 변수 이름을 한 번만 작성해서 간결하게 표현한 것은 맞지만, 각 프로퍼티를 구분하는 방식이 세미콜론으로 작성되었습니다. 프로퍼티를 구분할 때는 쉼표(,)를 사용해야 합니다.

const brand = 'Apple';

const ipad = {
  brand,
  title: 'iPad',
};

function getAge() {
  const date = new Date();
  return date.getFullYear() - this.birth + 1;
}

const user1 = {
  getAge,
  name: 'codeit',
  birth: 2017,
};

const user2 = {
  name: 'codeit',
  birth: 2017,
  getAge() {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};


// const user3 = {
//   name: 'codeit',
//   birth: 2017,
//   () => {
//     const date = new Date();
//     return date.getFullYear() - this.birth + 1;
//   },
// };

//user3 정답

const user = {
  name: 'codeit',
  birth: 2017,
  getAge: () => {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

