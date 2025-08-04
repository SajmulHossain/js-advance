const set = new Set([1, 2, 2, 1]);
set.add(4);
set.add("Sajmul");
console.log(set.delete(4));

console.log(set.has("Sajmul"));
//  set.clear()
console.log(set.size);

console.log(set);

const newarr = [1, 2, 3, 4, 5, 2, 3, 4, 1];

const [...set1] = new Set(newarr); // * it's giving unique value of an array

console.log(set1);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

// const union = new Set([arr1, arr2].flat())
const [...union] = new Set([...arr1, ...arr2]);
console.log("Union is " + union);

const intersaction = new Set([...arr1].filter((arr) => new Set(arr2).has(arr)));

console.log(intersaction);

const difference = new Set(arr1.filter((arr) => !new Set(arr2).has(arr)));

console.log(difference);
