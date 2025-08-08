let str = "Javascript is intelligent";
let charsToFind = ["a","i"];

for(let char of charsToFind){
      let count = 0
     for(let i=0;i<str.length;i++){
       if(char === str[i]){
        count ++
        console.log(`char is ${char} found at index ${i} and count is ${count}`);
         }
     }
}