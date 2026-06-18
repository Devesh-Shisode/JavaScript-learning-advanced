// function example() {
//   let b=4
//   function ex2() {
//     let a = 2;
//     console.log(a ,b);
//   }
//   return ex2;
// }

// let ex = example();

// ex();

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter())