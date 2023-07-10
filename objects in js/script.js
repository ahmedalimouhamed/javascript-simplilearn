var car = {
  car_manufacturer : "Audi",
  car_model : "Q7",
  price : 50000,

  allwheeldrive: function (){
    document.write("this car comes with four wheel drives");
  }
}

document.write("<h1> Manufecturer : "+car.car_manufacturer+"</h1>");
document.write("<h6> Model : "+car.car_model+"</h6>");
document.write("<h6> Price : "+car.price+"</h6>");
car.allwheeldrive();

function cars(car_maufacturer, car_model, price){
  this.car_manufacturer = car_maufacturer;
  this.car_model = car_model;
  this.price = price;

  this.allwheeldrive = function(){
    document.write("<h2>this car comes with four wheel drives</h2>");
  }
}

var c1 = new cars("Audi", "Q7", 500000);
c1.allwheeldrive();

var c2 = new cars("BMW", "X7", 400000);
document.write("<h4>"+c2.car_manufacturer+"</h4>");
document.write("<h4>"+c2.car_model+"</h4>");
document.write("<h4>"+c2.price+"</h4>");
c2.allwheeldrive();

car.newFUnction = function(){
  return ("Function successfully added!")
}
document.write("<h1>"+car.newFUnction()+"</h1>");

delete car.car_model;
document.write("<h4>"+car.car_model+"</h4>");