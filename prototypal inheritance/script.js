function Employee(name, id, salary){
  this.name = name;
  this.id = id;
  this.salary = salary;
}

Employee.prototype.post = function(){
  return (this.name + " is content creator");
}

var ahmed  = new Employee("ahmed", 1211, 10000);
console.log(ahmed);

function Programmer(name, id, salary, language){
  Employee.call(this, name, id, salary);
  this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

var Arun = new Programmer("Arun", 4321, 12000, "JavaScript");
console.log(Arun);
console.log(Arun.post());