 console.log("============= Assignment 05-operatorB ====================");
 
 console.log("------------------- task 1 -----------------------------");
 
function greaterNumber(num1, num2) {
  let result = num1 > num2 ? num1 : num2;
  console.log(`Greater number between ${num1} and ${num2} is: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

 console.log("------------------- task 2 -----------------------------");
 
function isEvenOrOddNum(num) {
  return num % 2 === 0 ? true : false;
}
console.log(`29 is even? → ${isEvenOrOddNum(29)}`);
console.log(`44 is even? → ${isEvenOrOddNum(44)}`);
console.log(`0 is even? → ${isEvenOrOddNum(0)}`);
console.log(`101 is even? → ${isEvenOrOddNum(101)}`);

  console.log("------------------- task 3 -----------------------------");
function wordLength(word) {
  return word.length % 2 === 0 ? "EVEN" : "ODD";
}
console.log(`JavaScript → ${wordLength("JavaScript")}`);
console.log(`developer → ${wordLength("developer")}`);
console.log(`Google → ${wordLength("Google")}`);

 console.log("============= Assignment 05-operatorTernaryAssigC ====================");

  console.log("---------------- step 1 -------------------------");
  
function maleMarriageEligibility(gender, age, boyName) {
  let result = (gender === "Male" && age >= 21)
    ? `Hey ${boyName} you are eligible for Marriage`
    : `Hey ${boyName} you are not eligible for Marriage`;
  console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

 console.log("---------------- step 2 -------------------------");
function femaleMarriageEligibility(gender, age, girlName) {
  let result = (gender === "Female" && age >= 18)
    ? `Hey ${girlName} you are eligible for Marriage`
    : `Hey ${girlName} you are not eligible for Marriage`;
  console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");
