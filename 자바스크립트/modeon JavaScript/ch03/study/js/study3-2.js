/*
지난 영상에서 Spread 구문에 대해서 살펴봤습니다. Spread 구문은 특히 배열을 다룰 때 유용하게 활용할 수 있었는데요. 그래서 사실 ES2015에서 Spread 구문이 처음 등장했을 땐 배열에서만 사용이 가능했고, 일반 객체에는 사용할 수가 없었습니다.
그러다가 ES2018에서 일반 객체에도 Spread 구문을 사용할 수있는 표준이 등장하게 되었는데요. 2018년이 훨씬 지난 지금, 대부분의 브라우저에서는 객체를 복사하거나 기존의 객체를 가지고 새로운 객체를 만들 때 Spread 구문 활용할 수가 있습니다.
*/

//객체 Spread하기

const codeit = { 
  name: 'codeit', 
};

const codeitClone = { 
  ...codeit, // spread 문법!
};

console.log(codeit); // {name: "codeit"}
console.log(codeitClone); // {name: "codeit"}

//이렇게 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사할 수가 있게 됩니다.

const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}

//이런 식으로 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때 활용할 수도 있겠죠?

/*
주의 사항
배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만, 객체로는 새로운 배열을 만들거나 함수의 아규먼트로 사용할 수는 없습니다.
*/

const latte1 = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha1 = {
  ...latte,
  chocolate: '20ml',
}

[...latte1]; // Error

(function (...args) {
  for (const arg of args) {
    console.log(arg);
  }
})(...cafeMocha); // Error

//그렇기 때문에 객체를 spread할 때는 반드시 객체를 표현하는 중괄호 안에서 활용해야 한다는 점. 잘 기억해 두시면 좋을 것 같습니다!