const arr=[1,2,5,5,3,2,5,6];
const unique=[];

arr.forEach(item=>{
  if(!unique.includes(item)){
    unique.push(item)
  }
})
console.log(unique);