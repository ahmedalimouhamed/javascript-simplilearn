function Print(){
  var uname = document.getElementById('uname').value;
  var password = document.getElementById('password').value;

  if(password == "Simplicode"){
    alert("login successfull");
  }else{
    alert("Wrong password");
  }
  alert("the name is : "+ uname+"\nThe password is "+password);
}

function func1(){
  var option_1 = document.getElementById("option_1");
  var option_2 = document.getElementById("option_2");

  if(option_1.checked === true){
    alert("the option selected is "+ option_1.value);
  }else if(option_2.checked === true){
    alert("the option selected is "+ option_2.value);
  }else{
    alert("No option selected ");
  }
}

function selected(){
  var choix = document.getElementById('select');
  if(choix.options[choix.selectedIndex].value == "Brendon Eich"){
    alert("the answer is correct");
  }else{
    alert("the answer is wrong");
  }
}