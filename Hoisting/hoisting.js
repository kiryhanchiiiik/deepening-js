//es 5

function run() {
  var car = "Honda";

  if (true) {
    var car = "BMW";
  }
  console.log("car in run function", car);
}

run(); // BMW

console.log("car out of function", car); // reference error

//es6

function run() {
  let car = "Honda";

  if (true) {
    let car = "BMW";
    console.log("car in block", car);
  }
  console.log("car out of block", car);
}

run();

// func

function declaration() {}

const funcExpression = () => {};

(() => {})(); // IIFE
