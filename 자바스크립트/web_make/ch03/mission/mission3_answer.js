fetch('https://jsonplaceholder.typicode.com/users') //'https://jsonplaceholder.typicode.codfm/users : 1차 에러 check 
  .then((response) => response.json()) //https://jsonplaceholder.typicode.com/users --> ex)구글.com으로 2차 에러 check
  .then((result) => {
    console.log(result);
    throw new Error('too long'); // 이거로 3차에러 check
    // throw new Error('too long');
  })
  .then((result) => {
    console.log(result);
    throw new Error('no required field'); // 이걸로 4차 에러 check
    // throw new Error('no required field');
  })
  .catch((error) => {
    //console.log(`${error.name}: ${error.message}`);
    // if(error.message ==='A'){

    // } else if(error.message ==='B'){

    // } else if(error.message === 'C'){

    // } else{

    // }

    if(error instanceof TypeError){

    } else if(error instanceof CustomErrorType){
      
    }else if(error instanceof CustomErrorType) {

    } else{
      
    }
  });
