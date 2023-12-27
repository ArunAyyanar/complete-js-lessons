class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log("Name is ", this.name);
  }
}

const emp1 = new Employee("arun", 34);
emp1.display();

const emp2 = new Employee("Balaji", 36);
emp2.display();
