let arr=[1,2,3,4,2,2,5,5,6,7,6,6]

function duplicate( arrr){
  return [...new Set(arrr)];
}

console.log(duplicate(arr));


 