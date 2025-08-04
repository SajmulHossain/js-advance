function closure() {
  a = 20;

  var myFunc = () => {
    console.log(a); // * output: 30
  };

  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}

closure();
a = 30;