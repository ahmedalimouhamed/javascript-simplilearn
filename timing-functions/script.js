var id = 0;
var message = () => alert("Welcome to simplicode");

function start(){
  id = setTimeout(message, 2000);
}

function start(){
  id = setInterval(message, 2000);
}

function stop(){
  clearTimeout(id);
}