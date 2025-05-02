console.log(typeof {}); // object

console.log(typeof []); // object

const personBob = {
  name: "Bob",
  age: 40,
};

function changePerson(person) {
  const personCopy = person;

  personCopy.name = "Bill";

  return personCopy;
}

const personBill = changePerson(personBob);

// console.log(personBill); // Bill
// ---- cuz it link
// console.log(personBob); // Bill

function changePersonBack(person) {
  const personCopy = { ...person };

  personCopy.name = "Bob";

  return personCopy;
}

console.log(changePersonBack(personBill)); // Bob

console.log(personBill); // Bill

[{}, {}, {}, {}]; // array with objects

const func = () => {};

console.log(typeof func); // function - array

func.pet = "dog";

console.log(func.pet);
