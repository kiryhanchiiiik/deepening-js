const array = [1, 2, 3, 4, 5];

// pop
// const poppedArray = array.pop();
// console.log(poppedArray); // 5 --- delete last and return

//push

// const pushedArray = array.push(6, 7);

// console.log(pushedArray); // add elements and return how much elements in arr

// shift

// const shiftedArray = array.shift(); // delete first element then return him

// console.log(shiftedArray);

//unshift

// const UnShiftedArray = array.unshift(8);

// console.log(UnShiftedArray);

// splice

// const splice = array.splice(0, 3, "7"); // delete indexed and add new some value

// console.log(splice);

//find

// const findArr = array.find((element, index, arr) => {
//   return element === 2;
// });

// console.log(findArr); // 2 if !2 - undefined

//some

// const animals = [
//   { kind: "Cat", speed: 150 },
//   { kind: "Cow", speed: 10 },
//   { kind: "Dog", speed: 100 },
//   { kind: "Ship", speed: 10 },
//   { kind: "Shark", speed: 200 },
// ];

// const someAnimalsFunc = animals.some((element, index, arr) => {
//   return element.speed > 100;
// });

// console.log(someAnimalsFunc); // return first true element

//every

// const everyAnimalsFunc = animals.some((element, index, arr) => {
//   return element.speed >= 10;
// });

// console.log(everyAnimalsFunc); // return every true

//filter

// const animals = [
//   { kind: "Cat", speed: 150 },
//   { kind: "Cow", speed: 10 },
//   { kind: "Dog", speed: 100 },
//   { kind: "Ship", speed: 10 },
//   { kind: "Shark", speed: 200 },
// ];

// const filteredAnimals = animals.filter((animal) => animal.speed > 10);

// console.log(filteredAnimals);

// map

// const animals = [
//   { kind: "Cat", speed: 150 },
//   { kind: "Cow", speed: 10 },
//   { kind: "Dog", speed: 100 },
//   { kind: "Ship", speed: 10 },
//   { kind: "Shark", speed: 200 },
// ];

// const mappedArr = animals.map((animal) => {
//   return animal.speed;
// });

// console.log(mappedArr); // all speed --- need return

//forEach

// const animals = [
//   { kind: "Cat", speed: 150 },
//   { kind: "Cow", speed: 10 },
//   { kind: "Dog", speed: 100 },
//   { kind: "Ship", speed: 10 },
//   { kind: "Shark", speed: 200 },
// ];

// const animalsNames = [];

// const forEachArr = animals.forEach((animal) => {
//   animalsNames.push(animal.kind);
// });

// console.log(forEachArr); // undefined

// console.log(animalsNames); // all kinds

// reduce

const animals = [
  { kind: "Cat", speed: 150 },
  { kind: "Cow", speed: 10 },
  { kind: "Dog", speed: 100 },
  { kind: "Ship", speed: 10 },
  { kind: "Shark", speed: 200 },
];

const reducedArr = animals.reduce((animalsMap, animal) => {
  animalsMap[animal.kind] = animal;

  return animalsMap;
}, {});

console.log(reducedArr);

const reducedArr2 = animals.reduce((totalSpeed, animal) => {
  return totalSpeed + animal.speed;
}, 0);

console.log(reducedArr2); // sum
