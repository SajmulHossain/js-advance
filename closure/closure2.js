function stopWatch() {
  var startTime = Date.now();
  console.log(startTime);

  function getDelay() {
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

const timer = stopWatch();

for (let i = -10000; i < 99992349; i++) {}

console.dir(timer);
timer();
timer = null; // * memory efficient
timer();