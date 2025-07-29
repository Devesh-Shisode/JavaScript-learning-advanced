 let  str ="hello everyone what are you doing"
 let words=str.split(" ")
 let newString=""

 for(let i=0 ;i<words.length;i++){

      let word =words[i]
      newString =newString + word.charAt(0).toUpperCase() + word.slice(1)+" "

 }

 console.log(newString);
 