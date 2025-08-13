class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  printName() {
    console.log("name");
  }
  static printHello() {
    console.log("Hello");
  }
}

const person1 = new Person("Sajmul", 12);
console.log(person1);

// console.log((person1.setName));
person1.setName = "";
console.log(person1);
Person.printHello();

Person.prototype.printName();
