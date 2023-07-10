var x = 6;
var y = 4;

//arithmetic operators
document.write("Addition", x+y);
document.write("<br>Substraction", x-y);
document.write("<br>Multiplication", x*y);
document.write("<br>Divition", x/y);
document.write("<br>modulos", x%y);
document.write("<br>increment x", ++x);
document.write("<br>decrement", --x);

//assignement operators
var a = 10;
var b = 5;

document.write("<br>value of A is ", a);
document.write("<br>value of B is ", b);

var a1 = 51;
a1+=9;
document.write("<br><br>Value of a1 ", a1);
a1-=9;
document.write("<br>Value of a1 ", a1);

var a3 = 10;
a3 *= 5;
document.write("<br>value of A3 is ", a3);

var a4 = 15;
a4 /= 3;
document.write("<br>value of A4 is ", a4);

var a5 = 20;
a5 %= 7;
document.write("<br>value of A5 is ", a5);

//string operators
var string1 = "Hello";
var string2 = "World";
document.write(string1 + " " + string2);

str3 = "<br>welcome "
str3 += "to Siplicode";
document.write(str3);

//conditional operators
var x = 60;
document.write("<br>________________");
document.write("<br>value of x >= 50 is "+ String(x >= 50));
//ternary oparator
document.write("<br>value of x "+ x>=50 ? " is Greater" : " is smaller");


//typeof operator
var x = 17;
var y = "test";
var flag = false;
var p;
var abc = null;

document.write("<br> type of x "+typeof x);
document.write("<br> type of y "+typeof y);
document.write("<br> type of flag "+typeof flag);
document.write("<br> type of p "+typeof p);
document.write("<br> type of abc "+typeof abc);

//bitwise operator & | ~ ^ 
document.write("<br><br>");
var x = 5;
var y = 1;
document.write("<br>x & y -> "+  String(x & y));
document.write("<br>x | y -> "+  String(x | y));
document.write("<br>x ^ y -> "+  String(x ^ y));
document.write("<br>~x -> "+  ~x);

