const seoul = ['김영훈', '김윤수', '김동욱', '강대위', '김영준',
  '김규식', '김태호', '김효신', '손효준', '김현승', '김재하', '김유나',
  '김재훈', '김혜선', '김민환', '김규리', '김소원', '김우재', '최영준',
  '김태순', '김종훈', '김성환', '김승용', '김지혜', '이승욱', '김도현',
  '김승규', '윤하은', '김유진', '김정민', '김혜정', '김예진', '김여진',
  '김성희', '김혜수', '김인선', '김상필', '김혜진', '서상원', '김상혜',
  '김민기', '김그루', '김희지'];

// 여기에 코드를 작성해 주세요.
// const notKims = seoul.filter((name)=>{
//   return name[0] !== '김'
// });

const notKims = seoul.filter((name)=>name[0] !== '김')


// 테스트 코드
console.log(notKims);