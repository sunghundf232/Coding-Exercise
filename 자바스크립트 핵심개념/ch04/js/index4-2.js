let codeit = {
  //name:'코드잇',

  'born Year':2017,
  isVeryNice:true,
  worstCourse:null,
  bestCourse:{
    title:'자바스크립트 프로그래밍 기초',
    language:'JavaScript'
  }
};

console.log(codeit.ceo);
codeit.ceo = '쫑이';
console.log(codeit.ceo);


//worstCourse 삭제

console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

console.log(codeit.name !== undefined);
console.log('name' in codeit); // 안전하게 프로포티 값 확인할때 : in

if('name' in codeit){
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log('name 프로퍼티는 존재하지 않아.')
}