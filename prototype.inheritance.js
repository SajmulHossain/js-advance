// const f = function oi() {
//     console.log('oi');
// }

// console.dir(f);

// Object.prototype.sajmul = 'I am sajmul'

// const obj = {}
// console.log(obj.sajmul);

const Person = function (name) {
  this.name = name;
};

const Programmer = function (name, stack) {
  Person.call(this);
  this.name = name;
  this.stack = stack;
};

Person.prototype = {
  sleep: () => {
    console.log(`${this.name} is sleeping`);
  },
};

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
Person.prototype.play = () => {
  console.log(`${this.name} is playing`);
};

const person1 = new Programmer("Sajmul", "Mern");
person1.play();
console.log(person1);
