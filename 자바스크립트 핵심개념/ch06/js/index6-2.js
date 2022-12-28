let sum = 0.1+0.2;
//console.log(sum); //0.3이 나오지 않아 오차 발생(0.30000000000000004) 나와

//2번 오차 해결

//console.log(sum.toFixed(1)); //0.3나와(문자열)

//문자열 - > 숫자열 변신

console.log(Number(sum.toFixed(1)));
console.log(+sum.toFixed(1));

let sum2 = 0.1 + 0.2;
console.log(Math.round(sum*10/*10의 거듭제곱*/)/10);



