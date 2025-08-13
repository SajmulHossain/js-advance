const symbol1 = Symbol("Sajmul"); // * description
const symbol2 = Symbol.for("Hossain"); // * key
const symbol3 = Symbol.for("Hossain");

console.log(symbol1, symbol2);
console.log(symbol3 == symbol2); // * true
console.log(symbol3 == symbol1); // * false

const developer = Symbol("Developer symbol");

const obj = {
  name: "sajmul",
  [developer]: "oi kire",
  developer,
};

console.log(obj);

const object = {};

(object.name = "Sajmul"),
  (object.designation = "Developer"),
  (object[Symbol("age")] = 20);

for (const key in object) {
  console.log(key);
}

console.log(Object.values(object));

console.log(object);

const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(2));
console.log(arr["includes"](1));

const includes = Symbol("my own includes function");

Array.prototype[includes] = () => {
  console.log("This is my own made includes function");
};

arr[includes]();
