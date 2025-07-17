const year = 2025;
const message = year === 2025 ? "Start learn" : "What the year?";

console.log(message);

false || false; // false
true || false; // true
false || true; // true
true || true; // true

const age = 18;

const withParent = true;

if (age > 18 || withParent) {
  console.log("You can go");
} else {
  console.log("Underage");
}

// &&

false && false; // false
true && false; // false
false && true; // false
true && true; // true
