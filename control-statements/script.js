var x = 10;
if(x < 10){
  document.write("the value of x is less than 10");
}else if(x == 10){
  document.write("the value of x is equal to 10");
}else{
  document.write("the value of x is greater than 10");
}

document.write("<br>");
var y = 8;
if(y > 0){
  document.write("the value of y is positive");
}else if(y == 0){
  document.write("the value of y is equal to zero");
}else{
  document.write("the value of y is negative");
}

document.write("<br>");
//switch case statment
var month = 2;
switch(month){
  case 1 : 
    document.write("January");
    break;
  case 2 :
    document.write("February");
    break;
  case 3 :
    document.write("March");
    break;
  default :
    document.write("other");
}

//for loop
for(var i = 1; i <= 10; i++){
  document.write("<h1>10 * " +i+ " = "+ 10 * i +"</h1>");
}


for(var i = 1; i <= 10; i+=2){
  document.write("<h1>10 * " +i+ " = "+ 10 * i +"</h1>");
}

//while loop
var x = 1;
while(x <= 50){
  document.write("<h1>"+x+"</h1>");
  x+=2;
}

//do while loop
var x = 10;
do{
  document.write("<p>Welcome to simplicode</p>")
  x--;
}while(x > 5)