 console.log("----------------- task 1 -----------------------");
 
let checkEvenOdd = function(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
};

console.log(checkEvenOdd(45));
console.log(checkEvenOdd(70));
console.log(checkEvenOdd(67));
console.log(checkEvenOdd(98));

console.log("----------------- task 2 -----------------------");
let isEligibleForVote = function(age) {
  if (age >= 18) {
    return "Eligible for vote";
  } else {
    return "Not eligible for vote";
  }
};

console.log(isEligibleForVote(18));
console.log(isEligibleForVote(20));
console.log(isEligibleForVote(17));
console.log(isEligibleForVote(40));

console.log("----------------- task 3 -----------------------");
 
let isStringLengthGreaterThan10 = function(str) {
  if (str.length > 10) {
    return "String has more than 10 characters";
  } else {
    return "String has 10 or fewer characters";
  }
};

console.log(isStringLengthGreaterThan10("JavaScript - ES6"));
console.log("----------------- task 4 -----------------------");
 
let isStartsWithJava = function(str) {
  if (str.startsWith("Java")) {
    return "String starts with 'Java'";
  } else {
    return "String does not start with 'Java'";
  }
};

console.log(isStartsWithJava("JavaScript Language"));
console.log(isStartsWithJava("Programming Language"));
