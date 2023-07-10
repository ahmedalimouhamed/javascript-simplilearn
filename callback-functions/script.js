/*

function one(){
  console.log('funtion 1');
}

function two(){
  console.log('funtion 2');
}

setTimeout(one, 2000);
two();

*/

function person(friend, person2){
  setTimeout(function(){
    console.log("My friend's name is "+friend);
    person2();
  }, 3000)
  
}

function person2(){
  console.log("My name is ahmed");
}

person("simplicode", person2);