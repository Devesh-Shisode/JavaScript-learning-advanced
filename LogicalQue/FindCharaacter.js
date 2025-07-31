let str ='Javascript is a nice language';

let charFind = ['a','i'];

function FindCharacter(str,charFind){
    charFind.forEach(char=>{
      let count=0;
      for(let i=0;i<str.length;i++){
        if(str[i]===char){
          count++
        }
      }
      console.log(`character ${char} appears ${count} times`);
    })
}

FindCharacter(str,charFind)