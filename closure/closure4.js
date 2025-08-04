// for(let i = 1; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
// }

// console.log('After loop');
/**
 * * output:
 * * After loop
 * * script.js:3 1
 * * script.js:3 2
 * * script.js:3 3
 * * script.js:3 4
 */

for (let i = 1; i < 5; i++) {
  const myFunc = () => {
    console.log(i);
  };
  setTimeout(myFunc, 3000);
  console.log(i);
  console.dir(myFunc);
}

console.log("After loop");
// * output will: 4 times 5
