class Student{
  constructor(name, age, roll){
    this.name = name;
    this.age = age;
    this.roll = roll;
  }

  Org(){
    return "I am "+this.name + " from simplicode"
  }

  dob(){
    return ("the dob od "+this.name+" is "+(2023 - this.age));
  }

  static add(a, b){
    return a + b;
  }
}

var ahmed = new Student("Ahmed", 21, 45);
console.log(ahmed);
console.log(Student.add(10, 45));

class Student2 extends Student{
  constructor(name, age, roll, language, section){
    super(name, age, roll);
    this.language = language;
    this.section  = section;
  }
}

var ali = new Student2("ali", 35, 2, "Javascript", "A");
console.log(ali);
console.log(ali.dob());
console.log(Student2.add(70, 75));

