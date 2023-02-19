//Quiz

const sayCodeit = function () {
  console.log('Codeit');
};

sayCodeit();
2
const codeit1 = {
  title: 'codeit',
  printTitle: function () {
    console.log('Codeit');
  },
};

codeit1.printTitle();
3
const codeit2 = [
  function () {
    console.log('Codeit');
  },
];

codeit2[0]();
4
function getFunction() {
  return function () {
    console.log('Codeit');
  }
}

const printCodeit = getFunction;
printCodeit();

//Quiz

function introduce(name = '홍길동', birth = 1443) {
  console.log(`안녕하세요 저는 ${name}입니다.`);
  console.log(`${birth}년에 태어났습니다.`);
}

introduce('장동건');
introduce('Joy', null);
introduce(undefined, 2090);

//Quiz

const getObject = function(a, b, c) {
  return { 0: a, 1: b, 3: c };
}