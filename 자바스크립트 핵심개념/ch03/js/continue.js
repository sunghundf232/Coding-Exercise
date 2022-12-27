//continue문 - 동작부분을 건너뛸때 따라서 바로 다음단계로 따라서 명령하려면 continue 적기 전에 적어
for(let i=1; i<=10; i++){
  if(i%2===0){
    continue;
  }
  console.log(i);
}

console.log('while문')

let i =1;

while(i<=10){
  if(i%2!==0){
    i++;
    continue;
  }
  console.log(i);
  i++;
}