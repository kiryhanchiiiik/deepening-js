console.log(typeof false); // boolean

const nullValue = null; // null
console.log(typeof nullValue); // object - error

let und;
console.log(und); // undefined

const Bob = "Bob";
console.log(typeof Bob); // string

Number(1); // 1
Number("abc"); // NaN === number

Symbol("abc"); // Symbol(abc)

const bigint1 = 3n;

console.log(typeof bigint1); // bigint

BigInt(3); // bigint

// ------------------------------

let name = "Bob";
let name2 = name;

console.log(name);
