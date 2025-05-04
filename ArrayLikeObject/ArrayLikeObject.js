function countSmt(a, b, c) {
  window.arg = arguments;
}

countSmt(1, "dog", { name: "Bob" });

console.log(arg);

// arg.map(); // error

console.log(typeof arg); // object
// arrow func = -arguments
