// Detta är en kommentar och kommer inte tolkas av webbläsaren som kod

let myName = "Christoffer"; // Sträng (string)
let age = 36; // Nummer (number)
const isTeacher = true; // Boolean (true eller false)

myName = "Ada";

let greeting = "Hej, jag heter " + myName + ", jag är " + age + " år";

console.log(greeting);
console.log("Är lärare: " + isTeacher);

if (myName === "Ada") {
  // Detta bildar ett uttryck som kan vara sant eller falskt
  console.log("Du heter Ada!");
} else {
  console.log("Du heter inte Ada");
}

if (age === 36) {
  // > större än, < mindre än
  console.log("Ung i hjärtat!");
} else if (myName === "Ada" && age === 36) {
  // === jämförelse, || = eller, && = och
  console.log("Precis rätt!");
}
