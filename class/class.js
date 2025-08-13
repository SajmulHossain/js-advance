class Person {
  constructor(name) {
    this.name = this.name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Programmer extends Person {
  constructor(name, stack) {
    super(name);
    this.stack = stack;
    this.name = name;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

const person1 = new Programmer("Sajmul", "MERN");
console.log(person1);
person1.eat();
