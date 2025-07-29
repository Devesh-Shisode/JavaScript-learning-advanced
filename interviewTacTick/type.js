const name ='devesh'
//console.log(name()); //refernce error

//console.log([]==[]); // false cause they are non primitive  dont holds any value

function abc(a,b,c){}
function xyz(a,b=0,c){}
function pqr(a=0,b,c){}

console.log(abc.length);
console.log(xyz.length);
console.log(pqr.length);

// abc() // iam last
// var abc =function (){console.log('i am first');
// }
// abc()// i am first
// function abc(){
//   console.log('i am last');
  
// }

// abc()//i am first function expression are not hoisted after the first calling after that normal function replace by the function expression
