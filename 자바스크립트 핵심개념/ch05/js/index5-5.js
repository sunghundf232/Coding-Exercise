//for ... of 반복분

let influencer = ['suwonlog','small.tiger','Minam.ludens','cu_covenience24']

//for 문

for(var i=0; i < influencer.length; i++){
  console.log(influencer[i]);
}


console.log('for..of문')
//for...of 반복문

for(var element of influencer){
  console.log(element);
}

/*
for(변수(이름은 마음대로) of 배열){
  동작부분;
}
*/


console.log('for..in문')
//for..in문 - 모든 재료를 반복적으로 메소드 , 렝스가 할당된 가능성이 있어 객체에 좋와 배열은 bad

for(var num in influencer){
  console.log(influencer[num]);
}

//다 차원 배열 - 순서나 위치 정보가 필요할때

let twoDimensional = [[1,2], [[3,4]]];
console.log(twoDimensional[0]);
console.log(twoDimensional[0][1]);

let otherFridge = {
  fridge : {
    '채소층' : ['참외','참외','참외','참외','참외'],
    '반찬층' : ['참외','참외','참외','참외','참외']
  },
  freezer : {
    '얼음층' : ['얼음'],
    '얼음층' : ['얼음','아이스크림'],
  }
};







let myFridge = [
  ['참외','토마토','오이','양파']
];

let mailbox = [
  101,201,301,501,601
];

let chessBoard = [
  ['R','N','Q','K','B','N','R'],
  ['','','','','','','','','',],
  ['R','N','Q','K','B','N','R']
]