function add(numberOne, numberTwo) {
  console.log("Add");
  console.log("NumberOne är: ", numberOne);
  console.log("NumberTwo är: ", numberTwo);
  let sum = Number(numberOne) + Number(numberTwo);

  console.log("Summan blir: " + sum);
}

function subtract(numberOne, numberTwo) {
  console.log("Subtract");
  let sum = numberOne - numberTwo;

  console.log("Summan blir: " + sum);
}

const inputNumberOne = prompt("Välj första nummer");
console.log("Första nummer: ", inputNumberOne);
const inputOperator = prompt("Välj addering (+) eller subtrahering (-)");
console.log("Operator:", inputOperator);
const inputNumberTwo = prompt("Välj andra nummer");
console.log("Andra nummer: ", inputNumberTwo);

if (inputOperator === "+") {
  add(inputNumberOne, inputNumberTwo);
} else if (inputOperator === "-") {
  subtract(inputNumberOne, inputNumberTwo);
}

// add(5, 10);
// add(25, 55);
