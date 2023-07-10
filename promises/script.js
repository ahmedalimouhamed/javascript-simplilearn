var prom = new Promise(function(resolve, reject){
  var drive = false;
  if(drive){
    resolve("yes");
  }else{
    reject("No");
  }
});

prom.then(function(resolve){
  console.log(resolve + " the user knows how to drive.");
}).catch(function(reject){
  console.log(reject + " the user does not know how to drive.");
})

var functions = function(){
  return new Promise(function(resolve, reject){
    resolve(" Learn functions ");
  });
};

var callback = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + " learn callbak functions ");
  });
};

var promises = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + " Good to go for promises in js");
  });
};

functions().then(function(result){
  return callback(result);
}).then(function(result){
  return promises(result);
}).then(function(result){
  console.log("good to go : "+result);
})