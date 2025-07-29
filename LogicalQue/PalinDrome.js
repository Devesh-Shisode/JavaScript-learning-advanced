
let word = "madam"

function palindrome(words){
  let palindrome ="";
  for(let i=words.length-1;i>=0;i--){
    palindrome+=words[i]

  }
  return (palindrome===words);
}

console.log(palindrome(word));
