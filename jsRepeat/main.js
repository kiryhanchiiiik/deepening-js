console.log(x); // undefined

var x = 5;
// ---------------

const calc = () => {
  return 1 + 1;
};

console.log(typeof null); // object
console.log(typeof calc); // func

// ---------------

let a = 1;

console.log(a++); // 1
console.log(++a); // 3
console.log(a); // 3

// ---------------

console.log(Number("   123   ")); // 123
console.log(Number("   123z   ")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// ---------------

console.log(Boolean(null)); // false
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(" ")); // true

// ---------------

console.log(false == 0); // true
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null === null); // true
console.log(null === undefined); // false

// ---------------

console.log("5" == 5); // true
console.log("5" === 5); // false
console.log("10" > 5); // true

// tasks

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
} // 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
} // 0 1 2

console.log([] + []); // ""
console.log([] + {}); // [object Object]
console.log({} + []); // 0
console.log({} + {});
("[object Object][object Object]");

// --------------

const a = { value: 10 };
const b = a;
a.value = 20;

console.log(b.value); // 20
