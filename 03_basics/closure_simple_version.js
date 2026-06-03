console.log("--- Without Closure ---");

function counterWithout() {       // naam badla
  let count = 0;
  count++;
  console.log(count);
}

counterWithout(); // 1
counterWithout(); // 1
counterWithout(); // 1

console.log("--- With Closure ---");

function counterWith() {          // naam badla
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const myCounting = counterWith();
myCounting(); // 1
myCounting(); // 2
myCounting(); // 3