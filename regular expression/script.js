// //var regex = /Hello/;
// //var regex = /Hello/i;//case unsensetive
// // var regex = /Hello/g;//i all string
// // var str1 = "Hello and Welcome to our youtube channel. Say Hello if you are new here";

// // var output = regex.exec(str1);
// // console.log(output);


// // output = regex.exec(str1);
// // console.log(output);

// // var output = str1.match(regex);
// // console.log(output);

// // var output = str1.replace(regex, 'Hi');
// // console.log(output);

// //metacharacters in js
// let regex = /w*e/i;
// // let regex = /^welcome/;
// // let regex = /we.come/;
// // let regex = /welcome$/;
// // let regex = /back$/;
// // let regex = /we?lcome?/;
// let str1 = "welcome to our youtube channel. Welcome back wjfjjfe";

// var output = regex.test(str1);
// console.log(output);

// let op = regex.exec(str1);
// console.log(op);

// //sets and ranges

// var regex2 = /[abc]def/
// var str2 = "This string contains abcdef";
// var output2 = regex2.test(str2);
// console.log(output2);

// var regex3 = /[a-zA-Z]def/
// var str3 = "This string contains abcdefhjhfniniAKDJiilmkSHIdef";
// var output3 = regex3.test(str3);
// console.log(output3);

// var regex4 = /[^a-f]def/
// var str4 = "This string contains gdef";
// var output4 = regex4.test(str4);
// console.log(output4);

function employee(){
  var empId = document.getElementById('eid').value;
  var check = /[DE]253[10-99]/;
  console.log((check.test(empId)))
  if((check.test(empId))){
    alert("Valid employee id");
  }else{
    alert("Invalid employee id")
  }
}
