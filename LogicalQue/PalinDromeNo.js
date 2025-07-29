function Checkpalin(num) {
  let temp = num;
  let reversed = 0;
  let rem;

  while (num > 0) {
    rem = num % 10;
    reversed = reversed * 10 + rem;
    num = Math.floor(num / 10) // Use Math.floor for integer division
  }

  if (temp == reversed) {
    console.log(`this is a palindrome ${temp}`);
  } else {
    console.log(`this is not a palindrome ${temp}`);
  }
}

Checkpalin(121); // Output: this is a palindrome 121
//Checkpalin(123); // Output: this is not a palindrome 123

// let result1=Math.floor(5376/10);
// let result2=5376/10

// console.log(result1,"  ",result2);
