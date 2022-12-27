//if문

/*
if(조건부분){
  동작부분
}
*/

/*
let temperature = 0;

if(temperature <=0){
  console.log('응 물 얼어');
} else {
  if(temperature <100){
    console.log('응 물 얼지도 끊지도 않아');
  } else {
    console.log('응 물 끊어');
  }
}
*/

let temperature = 140;

if(temperature <=0){
  console.log('응 물 얼어');
} else if (temperature < 100){
  console.log('응 물 끊지도 얼지도 않어');
} else if(temperature < 150){
  console.log('응 물 끊어');
} else {
  console.log('물이 끊어 뒤졌습니다.')
}