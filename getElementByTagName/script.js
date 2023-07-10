function func2(){
  var divs = document.getElementsByTagName("h2");

  for(var i = 0; i < divs.length; i++){
    divs[i].style.fontFamily = "Courier New";
    divs[i].style.color = "red";
  }
  
}