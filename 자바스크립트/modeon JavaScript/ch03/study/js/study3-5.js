const numbers = [5, undefined, null, 3, 1, 7, 0];
const [a, b = 4, c = 2, ...d] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d[2]);
console.log(d[4]);

// 아래 코드들이 정상적으로 동작하려면 printFavoritSong 함수를 어떻게 선언해야 할까요?

const music1 = { title: '난치병', singer: '하림' };
const music2 = { title: '너의 모든 순간', singer: '성시경' };
const music3 = { title: '무릎', singer: '아이유' };
const music4 = { title: '옛사랑', singer: '이문세' };
const music5 = { title: '한숨', singer: '이하이' };
const music6 = { title: '추억의 책장을 넘기면', singer: '이선희' };

printFavoritSong('영훈', music4);
printFavoritSong('동욱', music1);
printFavoritSong('대위', music3);
printFavoritSong('소원', music2);
printFavoritSong('우재', music5);
printFavoritSong('영준', music6);