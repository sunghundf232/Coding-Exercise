//메소드

let greetings = {
  sayHello:function(name){
    console.log(`Hello ${name}!`);
  },
  sayHi: function(){
    console.log('Hi!');
  },
  sayBye:function(){
    console.log('Bye');
  }
};


greetings.sayHello('Codeit');
greetings.sayBye('Codeit');
greetings.sayHi('Codeit');

console.log('----');

let rectAngle = {
  width:30,
  height:50,
  getArea: function(){
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width:15,
  height:40,
  getArea:function() {
    return triAngle.width * triAngle.height/2
  }
  
}





