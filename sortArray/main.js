const animals = [
  { kind: "Cat", speed: 150 },
  { kind: "Cow", speed: 10 },
  { kind: "Dog", speed: 100 },
  { kind: "Ship", speed: 10 },
  { kind: "Shark", speed: 200 },
];

const sortedArray = animals.sort((animal1, animal2) => {
  if (animal1.speed > animal2.speed) {
    return -1;
  }

  if (animal1.speed < animal2.speed) {
    return 1;
  }

  return 0;
});

console.log(sortedArray); // mutation
