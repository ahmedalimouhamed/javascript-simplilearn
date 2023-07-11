function makeOrder(coffee){
  return new Promise((resolve, reject) => {
    console.log("Making request for a "+coffee);
    if(coffee == "Black coffee"){
      resolve("here is your coffee have a nice day");
    }else{
      reject("Sorry we server Black coffee only.")
    }
  })
}

function processOrder(order){
  return new Promise((resolve, reject) => {
    console.log("Processing order");
    resolve("Extra information "+order)
  })
}

async function func1(){
  try{
    var order = await makeOrder('Black coffee');
    console.log("Order has been received");
    var processOrder = await processOrder(order);
    console.log(processOrder);
  }catch(err){
    console.log(err);
  }
}

func1();