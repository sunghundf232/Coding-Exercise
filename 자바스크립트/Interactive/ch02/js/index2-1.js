//window - 전영역에 영향 미쳐(전역객체)

console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);


console.log('문서 객체 모델')
//DOM - 문서 객체 모델

console.log(document); //html 태그 출력
console.log(typeof document);

//객체 형태 출력
console.dir(document);

const title = document.querySelector('#title');
console.log(title);

title.style.color='blue';

console.log('기타')

const str = 'Codeit';
const num = 123;
const bool = true;
const arr = [1, 2, 3];
const obj = {
  name: 'Codeit',
  email: 'codeit@codeit.kr',
};

function func() {
  console.log('I love Codeit!');
}

console.log('--- str ---');
console.log(str);
console.dir(str);
console.log('--- num ---');
console.log(num);
console.dir(num);
console.log('--- bool ---');
console.log(bool);
console.dir(bool);
console.log('--- arr ---');
console.log(arr);
console.dir(arr);
console.log('--- obj ---');
console.log(obj);
console.dir(obj);
console.log('--- func ---');
console.log(func);
console.dir(func);






