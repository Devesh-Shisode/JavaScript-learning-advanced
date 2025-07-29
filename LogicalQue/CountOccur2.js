
let arr=['a','b','c','a','b','c','a','b','c']

let count ={}

for(let i=0;i<arr.length;i++){
  let elements=arr[i]
  if(count[elements]===undefined){
     
    
    count[elements]=1
   }else{
    count[elements]=count[elements]+1
   }
}

for (let key in count){
  console.log(`${key}---->${count[key]}`);
  console.log(count);
  
}