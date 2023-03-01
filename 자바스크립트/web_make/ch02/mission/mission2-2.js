// 새 직원 정보는 원하는 대로 작성하세요
const newMember = {
  name:  '쫑이',
  email: '젤 귀 쫑이@귀여웅.com',
	department: '졸귀부서'
};


fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: // 여기에 코드를 작성하세요
  JSON.stringify(newMember),
})
  .then(() => {
    fetch('https://learn.codeit.kr/api/members')
      .then((response) => response.text())
      .then((result) => {
        const members = // 여기에 코드를 작성하세요 
        // 리퀘스트를 보낼 때 Serialization 작업을 하려면 JSON 객체의 serialize 메소드를, 리스폰스를 받았을 때 Deserialization 작업을 하려면 JSON 객체의 parse 메소드를 사용하면 됩니다.
        JSON.parse(result)  
        console.log(members[members.length - 1]);
      });
  });