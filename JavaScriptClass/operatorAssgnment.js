console.log("---------------------- operator Assignment 1 ----------------------");

function sqaureOfWorldLength(word){
  wordlength = word.length
    console.log(`Length of Word ${word} is ${wordlength}`);
    console.log(`Length of Word ${wordlength} is ${wordlength*wordlength}`);
}

sqaureOfWorldLength("Javascript");
sqaureOfWorldLength("google chrome");
sqaureOfWorldLength("web developer smart");

console.log("---------------------- operator Assignment 2 ----------------------");

function str(){
  let str = "I Am Mern Stack Developer"
  strlength = str.length
  strword = str.split(" ").length
  console.log(`string length is : ${strlength} and string word length is : ${strword}`);
  console.log(`division of string length and word length is : ${strlength/strword}`);
  console.log(`Multiplication of string length and word length is : ${strlength*strword}`);
  
}

str()