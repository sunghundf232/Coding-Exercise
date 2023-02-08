/** 
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때 
 *
 * mousemove 관련 마우스가 이동할때 위치와 관련되서 필요함
 * > MouseEvent.clientX, clientY
 * : 화면에 표시되는 창 기준 마우스 포인터 위치   
 * 
 * > MouseEvent.pageX, pageY
 * : 웹 문서 전체 기준 마우스 포인터 위치
 * 
 * > MouseEvent.offsetX, offsetY 
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 * offset - 이벤트가 발생한 요소내에서 위치(어느정도 차이가 있다.)
 * client : 화면에 표시되는 창의 기준으로 위치
 * page : 문서 전체 기준으로 위치
 * client,page 값은 차이가 없다.
 * 하지만 스크롤시 client,page y값 차이 발생 (a:x값 , b: y값)
 */
 
/* mousemove 이벤트 예시 1
const box1 = document.querySelector('#box1');

function onMouseMove(){
  console.log('mouse is moving!');
}
box1.addEventListener('mousemove',onMouseMove)
*/

/* mousemove 이벤트 예시 2  */

const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);