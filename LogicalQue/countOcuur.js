let str = "hello";
let count = 1;

function countocuurence(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
  
  }
  return count;
}

console.log(countocuurence(str));
