const numbers = [1, 2, 3, 4, 5, 4, 2, 2, 5, 7, 8];

const filteredNumbers = new Set(numbers);

//  set filter unique values

console.log(filteredNumbers); // set
console.log([...filteredNumbers]); // array

const setNumber = new Set(numbers);
// console.log(setNumber);

// const set = new Set();
// set.has; // methods

const person1 = {
  name: "Bob",
  age: 40,
};

const set = new Set();

set.add(person1);

set.add({
  name: "Bob",
  age: 40,
}); // will be add cuz here another link

console.log(set);

// Weak Set

const filteredValues = new WeakSet();

filteredValues.add({ name: "Bob" }); // only object

// Map

const map = new Map(); // key every type in default object = string and symbol

const personBob = {
  name: "Bob",
  age: 40,
};

const pet1 = "dog";

map.set(personBob, pet1);

console.log(map);

// Weak Map
// weak map doesn't has method for list keys and key must be object
