 

//  function outer(){
//       count=0
//       function inner(){
//           count++
//           console.log(count);
//       }
//       return inner
//  }

//  let variable = outer()

//  variable()
//  variable()
//  variable()
//  variable()

 let str = "devesh";

 const count ={}

 for(let i=0;i<str.length;i++){
      let char =str[i]
      if(count[char]){
        count[char] =count[char]+1
      }else{
        count[char]=1
      }
 }

 for(let key in count){
    console.log(`${key} ----> ${count[key]}`);
 }
console.log(count);
