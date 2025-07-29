let arr=[2,3,5,7]
let arr3=[3,8,9]

console.log("arr 1 is",arr,"\n");
console.log("arr 2 is",arr3,"\n");
function convertnum(arr1,arr2) {
    let digit1=0
    let digit2=0
    let add=0
    
  for(let i=0;i<arr1.length;i++){
        digit1=digit1*10+arr1[i] 
  }
  for(let i=0;i<arr2.length;i++){
    digit2=digit2*10+arr2[i] 
}
     
  
    add=digit1+digit2;
     console.log("addition of array",add,"\n");
     
    return add
    
     
}

let result =convertnum(arr,arr3)

function convertarr(result) {
  let convert = [];
  let mod;

  while (result > 0) {
    mod = result % 10;          
    convert.push(mod);          
    result = Math.floor(result / 10);  
  }

  console.log("addition converted into num",convert,"\n");
   return convert;
}

let result2=convertarr(result)
let start=0
let end = result2.length - 1;

function reversearr(result2,start,end){
  let temp
  while(start<end){
    temp=result2[start]
    result2[start]=result2[end]
    result2[end]=temp

    start++
    end--
  }
    
  console.log("Reverse Array ",result2);
  

}

let finalResult = reversearr(result2, start, end);
console.log(finalResult); 