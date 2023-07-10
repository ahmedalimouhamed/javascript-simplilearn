var car1 = "honda";
var car2 = "kia";
var car3 = "ford";

document.write("<p>"+car1+"</p>");
document.write("<p>"+car2+"</p>");
document.write("<p>"+car3+"</p>");

var cars = ["honda", "kia", "ford"];
document.write("<p>"+cars+"</p>");
document.write("<p>"+cars[0]+"</p>");
document.write("<p>"+cars[1]+"</p>");
document.write("<p>"+cars[2]+"</p>");

for(var i = 0; i < cars.length; i++){
  document.write("<p>"+cars[i]+"</p>");
}

var fruits = new Array("Apple", "Banana", "Mango");
for(var i = 0; i < fruits.length; i++){
  document.write("<p>"+fruits[i]+"</p>")
}

fruits.push("orange");
for(var i = 0; i < fruits.length; i++){
  document.write("<p>"+fruits[i]+"</p>")
}

var popped = fruits.pop();
document.write("<p> popped is : "+popped+"</p>")
for(var i = 0; i < fruits.length; i++){
  document.write("<p>"+fruits[i]+"</p>")
}

var shifted = fruits.shift();
document.write("<p> shifted is : "+shifted+"</p>")
for(var i = 0; i < fruits.length; i++){
  document.write("<p>"+fruits[i]+"</p>")
}

fruits.unshift("test");
for(var i = 0; i < fruits.length; i++){
  document.write("<p>"+fruits[i]+"</p>")
}

var [fruit1, fruit2, fruit3] = fruits;
document.write("<p> fruit1 "+fruit1+"</p>")
document.write("<p> fruit2 "+fruit2+"</p>")
document.write("<p> fruit3 "+fruit3+"</p>")

