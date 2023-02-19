// 여기에 코드를 작성하세요
/*
function ignoreFirst(...args){
  for(let arg of args){
    console.log(arg);
  }
  
}
*/


function ignoreFirst(...ign){
  ign.shift();
  for(let el of ign){
    console.log(el);
  }
}



ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);


function ignoreFirst(a,...rest){
  for(const el of rest){
    console.log(el);
  }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);