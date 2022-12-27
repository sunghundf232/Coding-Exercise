//객체(Object)

let codeit = {
  name:'코드잇',
  //bornYear:2017, -> 6번줄과 유사
  'born Year':2017,
  isVeryNice:true,
  worstCourse:{
    title:'자바스크립트 프로그래밍 기초',
    language:'JavaScript'
  }
};

//console.log(codeit.bornYear); 16,17번줄 값 2017 나와
//console.log(codeit['born Year']);
console.log(codeit['born ' + 'Year']); //대괄호 표기법

let propertyName = 'name';
console.log(codeit[propertyName])

console.log(codeit.worstCourse.title); //8번줄 결과값나타내기

//점 표기법 사용할수 없을때 21번줄과 결과 값 같아
console.log(codeit.worstCourse['title']);

console.log(codeit.worstCourse['tearch']); //tearch값 없어서 underfined나와

//최종 정리

//1. 점 표기법
console.log(codeit.name);

