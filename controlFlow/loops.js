// const arr=[1,2,3,4,5]

 
 
// arr.forEach((index,item,arr)=>{
//     console.log(index," ",item," ",arr);
    
// })
 

const arrObj=[
      {
        language : "js",
        fullname : "javascript"
      },
      {
        language : "c++",
        fullname : "cpp"
      },
      {
        language : "php",
        fullname : "preprocessor hypertext"
      }
]

arrObj.forEach((item,index)=>{
      console.log(item.fullname,"",index);
      
})

let arr2=[1,2,3,4,5]

let arr3=arr2.forEach((item)=>{item})

console.log(arr3);


let arr34=arr2.filter((item)=>item>4)
console.log(arr34);
