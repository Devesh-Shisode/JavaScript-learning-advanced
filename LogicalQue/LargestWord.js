
let words ="i love javascript"

function findlatgest( word){
    let largestWord="";
      let words=word.split(" ")
    for(let i=0; i< words.length;i++){
      if(words[i].length>largestWord.length){
        largestWord=words[i];
      }
    }
    return largestWord;
}

console.log(findlatgest(words));
