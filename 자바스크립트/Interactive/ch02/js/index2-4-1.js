//노드 삭제와 이동

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

/*
//노드 삭제하기 : Node.remove();
tomorrow.remove();

//오늘 할일에 자식요소 중 세번째 고양이 장난감 쇼핑(방으로 : 2번)을 없애려고할때

today.children[2].remove();
*/

//노드 이동하기 : prepend , append , before , after

/*
today.prepend(tomorrow.children[1]); 
//내일할일(뮤지컬 공원 예매) - > 오늘 할일 첫밴째 방으로 0번방 이동

today.append(tomorrow.children[1]); 
//내일할일(뮤지컬 공원 예매) - > 오늘 할일 마지막 방으로 3번방 이동

*/

//오늘 할일 - 고양이 화장실 청소 --> 내일 할일 : 뮤지컬 공원 예매 다음번방으로 옮겨



//tomorrow.children[1].after(today.children[1]);
//tomorrow.children[2].before(today.children[1]);
tomorrow.lastElementChild.before(today.children[1]);