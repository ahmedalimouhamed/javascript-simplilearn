function func1(){
  classes = document.getElementsByClassName('cls1');

  for(var i = 0; i < classes.length; i++){
    classes[i].style.backgroundColor = "yellow";
  }
}