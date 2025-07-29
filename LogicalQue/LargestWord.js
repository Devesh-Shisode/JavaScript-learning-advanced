
let words ="i love javascript"

function findlatgest( word){
    let largestNo="";
      let words=word.split(" ")
    for(let i=0; i< words.length;i++){
      if(words[i].length>largestNo.length){
        largestNo=words[i];
      }
    }
    return largestNo;
}

console.log(findlatgest(words));
